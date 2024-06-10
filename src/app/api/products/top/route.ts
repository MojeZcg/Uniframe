import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const topProducts = await db.products.findMany({
      orderBy: {
        product_view_count: "desc",
      },
      take: 6,
    });

    return NextResponse.json(topProducts);
  } catch (error) {
    console.error("Database query failed", error);

    return NextResponse.json(
      {
        error:
          "An error occurred while fetching the top products. Please try again later.",
      },
      { status: 500 },
    );
  }
}
