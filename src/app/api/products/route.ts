import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams;

  const page = url.get("p");
  const order = url.get("o");
  const query = url.get("q");

  if (typeof query !== "string" || !query.trim()) {
    return NextResponse.json(
      { error: "Invalid query parameter" },
      { status: 400 },
    );
  }

  let queryParam;
  if (query === "none") {
    queryParam = "";
  } else {
    queryParam = query;
  }

  const pageNumber = page ? parseInt(page, 10) : 1;
  if (isNaN(pageNumber) || pageNumber <= 0) {
    return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
  }

  const pageSize = 12;
  const skip = (pageNumber - 1) * pageSize;

  if (request.method === "GET") {
    try {
      const totalCount = await db.products.count({
        where: {
          OR: [
            {
              product_name: {
                contains: queryParam,
                mode: "insensitive",
              },
            },
            {
              product_description: {
                contains: queryParam,
                mode: "insensitive",
              },
            },
          ],
        },
      });

      const min = await db.products.aggregate({
        _min: {
          product_price: true,
        },
      });

      const max = await db.products.aggregate({
        _max: {
          product_price: true,
        },
      });

      const products = await db.products.findMany({
        orderBy: order
          ? {
              product_price: order === "asc" ? "asc" : "desc",
            }
          : {
              product_availables: "desc",
            },
        where: {
          OR: [
            {
              product_name: {
                contains: queryParam,
                mode: "insensitive",
              },
            },
            {
              product_description: {
                contains: queryParam,
                mode: "insensitive",
              },
            },
          ],
        },
        skip: skip,
        take: pageSize,
      });

      const totalPages = Math.ceil(totalCount / pageSize);

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

  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
