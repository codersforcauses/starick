import { z } from "zod";

export const GPTMessageSchema = z.object({
  role: z.literal("user").or(z.literal("system")),
  content: z.string()
});

export const GPTMessageArraySchema = z.array(GPTMessageSchema);

export type GPTMessage = z.infer<typeof GPTMessageSchema>;

export type GPTPayload = {
  model: string;
  messages: GPTMessage[];
  stream: boolean;
};
