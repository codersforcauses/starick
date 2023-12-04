import { NextApiRequest, NextApiResponse } from "next";

import { GPTStream } from "@/lib/chatbot/methods";
import { chatbotPrompt } from "@/lib/chatbot/prompt";
import {
  GPTMessage,
  GPTMessageArraySchema,
  GPTPayload
} from "@/lib/chatbot/validators";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = await req.body;
    const messages = GPTMessageArraySchema.safeParse(body);

    if (!messages.success) {
      return res.status(400).json({ message: "Bad Request" });
    }

    const outgoingMessages: GPTMessage[] = messages.data;
    outgoingMessages.unshift(chatbotPrompt);

    const payload: GPTPayload = {
      model: "gpt-3.5-turbo",
      messages: outgoingMessages,
      stream: true
    };

    const incomingMessage = await GPTStream(payload);

    return res.status(200).json({ message: incomingMessage });
  }
  return res.status(405).json({ message: `${req.method} Not Allowed` });
}
