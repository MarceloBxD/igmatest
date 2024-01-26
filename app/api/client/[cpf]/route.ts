import { cpfWithMask } from "./../../../../utils/cpfWithMask";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(req: NextRequest, { params }: { params: any }) {
  try {
    const cpf = params?.cpf;

    if (!cpf) {
      return NextResponse.json(
        { message: "You have to give the CPF" },
        {
          status: 404,
        }
      );
    }

    const client = await prisma?.client.findFirst({
      where: {
        cpf: cpfWithMask(cpf),
      },
    });

    if (!client) {
      return NextResponse.json(
        { message: "Client not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(client);
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
