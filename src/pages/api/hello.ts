// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Message } from "@prisma/client";

import prisma from "../../lib/prisma";

type Data = Message[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const messages = await prisma.message.findMany({
    where: { content: req.query.content as string }
  });

  res.status(200).json(messages);
}

export const config = {};
