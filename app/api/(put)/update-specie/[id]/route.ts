import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function PUT(req: NextRequest, { params }: { params: any }) {
  try {
    const id = params?.id;
    const { nomeComum, nomeCientifico, valor, classeTaxonomicaId } =
      await req.json();

    if (!nomeComum || !nomeCientifico || !valor || !classeTaxonomicaId) {
      return NextResponse.json(
        { message: "Missing required fields" },
        {
          status: 400,
        }
      );
    }

    if (!id) {
      return NextResponse.json(
        { message: "You have to provide the ID" },
        {
          status: 404,
        }
      );
    }

    const specie = await prisma.especie.findFirst({
      where: {
        id,
      },
    });

    if (!specie) {
      return NextResponse.json(
        { message: "Species not found" },
        {
          status: 404,
        }
      );
    }

    const updatedSpecie = await prisma.especie.update({
      where: { id },
      data: {
        nomeComum,
        nomeCientifico,
        valor,
        classeTaxonomicaId,
      },
    });

    return NextResponse.json(updatedSpecie);
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
