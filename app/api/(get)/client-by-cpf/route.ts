import { cpfWithMask } from "@/utils/cpfWithMask";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { cpf } = await req.json();

    if (!cpf) {
      return NextResponse.json(
        { message: "You have to provider the CPF" },
        {
          status: 400,
        }
      );
    }

    const client = await prisma?.client.findFirst({
      where: {
        cpf: cpfWithMask(cpf),
      },
    });

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
