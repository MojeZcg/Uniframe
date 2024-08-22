import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

const isValidQuery = (query: string | null): string => {
  if (typeof query !== "string" || !query.trim()) {
    throw new Error("Invalid query parameter");
  }
  return query === "none" ? "" : query;
};

// Helper function to parse and validate page number
const getPageNumber = (page: string | null): number => {
  const pageNumber = page ? parseInt(page, 10) : 1;
  if (isNaN(pageNumber) || pageNumber <= 0) {
    throw new Error("Invalid page number");
  }
  return pageNumber;
};

// Helper function to parse and create price filter
const createPriceFilter = (price: string | null) => {
  if (!price) return {};
  const [minPrice, maxPrice] = price.split(",").map(Number);
  if (isNaN(minPrice) || isNaN(maxPrice)) return {};
  return {
    product_price: {
      gte: minPrice,
      lte: maxPrice,
    },
  };
};

// Helper function to create filter object
const createFilter = (query: string) => ({
  OR: [
    {
      product_name: {
        contains: query,
        mode: "insensitive" as const, // Use 'as const' to assert the type
      },
    },
    {
      product_description: {
        contains: query,
        mode: "insensitive" as const, // Use 'as const' to assert the type
      },
    },
  ],
});

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;

  try {
    const query = isValidQuery(url.get("q"));
    const pageNumber = getPageNumber(url.get("p"));
    const pageSize = 12;
    const skip = (pageNumber - 1) * pageSize;
    const priceFilter = createPriceFilter(url.get("price"));
    const order = url.get("o");

    const filter = createFilter(query);

    const totalCount = await db.products.count({
      where: {
        AND: [filter, priceFilter],
      },
    });

    const [min, max] = await Promise.all([
      db.products.aggregate({ _min: { product_price: true } }),
      db.products.aggregate({ _max: { product_price: true } }),
    ]);

    const products = await db.products.findMany({
      orderBy: order
        ? { product_price: order === "asc" ? "asc" : "desc" }
        : { product_availables: "desc" },
      where: {
        AND: [filter, priceFilter],
      },
      skip,
      take: pageSize,
    });

    const totalPages = Math.ceil(totalCount / pageSize);

    if (!products.length) {
      return NextResponse.json(
        {
          message: "No se encontraron productos disponibles.",
          status: "error",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      products,
      min,
      max,
      pagination: {
        totalCount,
        totalPages,
        currentPage: pageNumber,
        pageSize,
      },
    });
  } catch (error) {
    console.error("Database query failed", error);
    return NextResponse.json(
      {
        error:
          "An error occurred while fetching products. Please try again later.",
      },
      { status: 500 },
    );
  }
}
