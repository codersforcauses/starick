import { GPTPayload } from "./validators";

type GPTRes = {
  success: boolean;
  message: string | Response;
};

export async function fetchGPTResponse(payload: GPTPayload): Promise<GPTRes> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    return { success: false, message: "Unexpected Error" };
  }

  const data = await res.json();

  return { success: true, message: data };
}
