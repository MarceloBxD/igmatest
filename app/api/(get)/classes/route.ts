import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(req: NextRequest, { params }: { params: any }) {
  try {
    const classesTaxonomicas = await prisma.classeTaxonomica.findMany({
      orderBy: {
        nome: "asc",
      },
    });

    if (classesTaxonomicas.length === 0) {
      return NextResponse.json(
        {
          message: "No taxonomic classes registered in our database",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(classesTaxonomicas);
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
