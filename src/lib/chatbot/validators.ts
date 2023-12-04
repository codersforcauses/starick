import { z } from "zod";

export const GPTMessageSchema = z.object({
  role: z.literal("user").or(z.literal("system")),
  content: z.string()
});

export type GPTMessage = z.infer<typeof GPTMessageSchema>;
