import { validateCpf } from "@/utils/validateCpf";
import { NextRequest, NextResponse } from "next/server";
import { cpfWithMask } from "@/utils/cpfWithMask";
import prisma from "@/libs/prisma";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, cpf, birthday } = await req.json();

    if (!name || !cpf || !birthday) {
      return NextResponse.json(
        { message: "Missing required fields" },
        {
          status: 400,
        }
      );
    }

    const clientAlreadyExists = await prisma?.client.findFirst({
      where: {
        cpf: cpfWithMask(cpf),
      },
    });

    if (clientAlreadyExists) {
      return NextResponse.json(
        { message: "Client already exists" },
        {
          status: 400,
        }
      );
    }

    if (validateCpf(cpf)) {
      const newClient = await prisma?.client.create({
        data: {
          name,
          cpf: cpfWithMask(cpf),
          birthday,
        },
      });
      return NextResponse.json(newClient, {
        status: 201,
      });
    }

    return NextResponse.json(
      { message: "Invalid CPF" },
      {
        status: 422,
      }
    );
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
