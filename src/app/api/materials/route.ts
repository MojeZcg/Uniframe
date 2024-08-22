import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const materials = await db.materials.findMany({
      orderBy: {
        material_id: "desc",
      },
    });

    if (!materials.length) {
      return NextResponse.json(
        {
          message: "No se encontraron materiales disponibles.",
          status: "error",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(materials);
  } catch (error) {
    console.error("Database query failed", error);

    return NextResponse.json(
      {
        error:
          "An error occurred while fetching the materials. Please try again later.",
      },
      { status: 500 },
    );
  }
}
