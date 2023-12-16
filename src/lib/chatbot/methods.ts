import { GPTPayload, GPTResponseSchema } from "./validators";

export async function fetchGPTResponse(payload: GPTPayload) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) return { success: false, message: "Unexpected Error" };

  const data = await res.json();
  const message = GPTResponseSchema.safeParse(data);

  if (!message.success) return { success: false, message: "Unexpected Error" };

  return { success: true, message: message.data.choices[0].message };
}
