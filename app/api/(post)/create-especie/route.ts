import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
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

    // tente encontrar uma espécie com o mesmo nome científico
    const especieExistente = await prisma.especie.findFirst({
      where: {
        nomeCientifico,
      },
    });

    if (especieExistente) {
      return NextResponse.json(
        { message: "Especie already exists" },
        {
          status: 400,
        }
      );
    }

    const especie = await prisma.especie.create({
      data: {
        nomeComum,
        nomeCientifico,
        valor,
        classeTaxonomicaId,
      },
    });

    return NextResponse.json(especie, {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const especies = await prisma.especie.findMany();

    return NextResponse.json(especies, {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
