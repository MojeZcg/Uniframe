import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const products = await db.products.findMany({
    orderBy: {
      product_availables: "desc",
    },
  });
  return NextResponse.json(products);
}
