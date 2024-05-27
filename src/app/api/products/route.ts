import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: Request, pageN: number) {
  const url = new URL(request.url);

  const page = url.searchParams.get("p");
  const order = url.searchParams.get("o");

  const pageNumber = page ? parseInt(page, 10) : 1;
  const pageSize = 3;
  const skip = (pageNumber - 1) * pageSize;

  const totalCount = await db.products.count();

  const products = await db.products.findMany({
    orderBy: order
      ? {
          product_price: order === "asc" ? "asc" : "desc",
        }
      : {
          product_availables: "desc",
        },
    skip: skip,
    take: pageSize,
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  return NextResponse.json({
    products,
    pagination: {
      totalCount,
      totalPages,
      currentPage: pageNumber,
      pageSize,
    },
  });
}
