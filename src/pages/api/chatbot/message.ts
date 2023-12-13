import { NextApiRequest, NextApiResponse } from "next";

import { fetchGPTResponse } from "@/lib/chatbot/methods";
import { chatbotPrompt } from "@/lib/chatbot/prompt";
import {
  GPTMessage,
  GPTMessageArraySchema,
  GPTMessageSchema,
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
      return res.status(400).json("Bad Request");
    }

    const outgoingMessages: GPTMessage[] = messages.data;
    outgoingMessages.unshift(chatbotPrompt);

    const payload: GPTPayload = {
      model: "gpt-3.5-turbo",
      messages: outgoingMessages,
      stream: false
    };

    const incomingMessages = await fetchGPTResponse(payload);
    const valid = GPTMessageSchema.safeParse(incomingMessages.message);

    if (incomingMessages.success && valid.success) {
      return res.status(200).json(valid.data);
    }

    return res.status(500).json(incomingMessages.message);
  }
  return res.status(405).json(`${req.method} Not Allowed`);
}
