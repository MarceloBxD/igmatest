import { NextRequest, NextResponse } from "next/server";

import prisma from "@/libs/prisma";

// Per page clients
const PER_PAGE_SPECIES = 4;

export async function GET(req: NextRequest, { params }: { params: any }) {
  // getting page from query params
  const page = Number(req.url?.split("?")[1]?.split("=")[1]);

  try {
    let skip = 0;

    if (page) {
      skip = (page - 1) * PER_PAGE_SPECIES;
    }

    const species = await prisma.especie.findMany({
      skip,
      take: PER_PAGE_SPECIES,
      orderBy: {
        nomeComum: "asc",
      },
    });

    if (species.length === 0) {
      return NextResponse.json(
        {
          message: "No species registered in our database",
        },
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
