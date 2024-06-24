import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const classId = searchParams.get("classId");

    if (!classId) {
      return NextResponse.json(
        { message: "You have to provide the class ID" },
        {
          status: 400,
        }
      );
    }

    const species = await prisma.especie.findMany({
      where: {
        classeTaxonomicaId: classId,
      },
    });

    if (species.length === 0) {
      return NextResponse.json(
        { message: "No species found for the given class ID" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(species);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
