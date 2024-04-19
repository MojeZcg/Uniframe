import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const products = await db.products.findMany();
  return NextResponse.json(products);
}

/** async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} */
