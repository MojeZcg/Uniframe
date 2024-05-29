import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { productid: string } },
) {
  const id = Number(params.productid);

  try {
    const product = await db.products.findUnique({
      where: {
        product_id: id,
      },
      include: {
        product_materials: true,
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({
      product,
    });
  } catch (error) {
    console.error("Database query failed", error);

    return NextResponse.json(
      {
        error:
          "An error occurred while fetching the product. Please try again later.",
      },
      { status: 500 },
    );
  }
}
