import { NextResponse } from "next/server";

export function GET(
  request: Request,
  { params }: { params: { productid: string } },
) {
  const id = params.productid;
  return NextResponse.json({
    Message: `Hello World! ${id}`,
  });
}
