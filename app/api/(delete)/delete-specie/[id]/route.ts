import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function DELETE(req: NextRequest, { params }: { params: any }) {
  try {
    const id = params?.id;

    if (!id) {
      return NextResponse.json(
        { message: "You have to provide the ID" },
        {
          status: 404,
        }
      );
    }

    const specie = await prisma?.especie.findFirst({
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

    const deletedSpecie = await prisma.especie.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deletedSpecie);
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
