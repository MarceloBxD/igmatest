import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import prisma from "@/libs/prisma";

export async function GET(req: NextApiRequest, { params }: { params: any }) {
  // getting page from query params
  const page = Number(req.url?.split("?")[1]?.split("=")[1]);

  try {
    let take = 3;
    let skip = 0;

    if (page) {
      skip = (page - 1) * take;
    }

    const clients = await prisma.client.findMany({
      skip,
      take,
      orderBy: {
        name: "asc",
      },
    });

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
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
