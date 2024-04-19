import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const topProducts = await db.products.findMany({
    where: {
      product_available: true,
    },
    orderBy: {
      product_view_count: "desc",
    },
    take: 6,
  });
  return NextResponse.json(topProducts);
}
