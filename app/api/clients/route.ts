import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const clients = await prisma.client.findMany();

    if (clients.length === 0) {
      return NextResponse.json(
        {
          message: "No clients registered in our database",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(clients);
  } catch (error) {
    console.error(error); // Adicionando um console.error para registrar detalhes do erro no console

    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
