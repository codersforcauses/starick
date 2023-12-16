import { z } from "zod";

export const GPTMessageSchema = z.object({
  role: z.literal("user").or(z.literal("assistant").or(z.literal("system"))),
  content: z.string()
});

export const GPTMessageArraySchema = z.array(GPTMessageSchema);

export type GPTPayload = {
  model: string;
  messages: GPTMessage[];
  stream: boolean;
};

export const GPTResponseSchema = z.object({
  id: z.string(),
  object: z.literal("chat.completion"),
  created: z.number().int(),
  model: z.string(),
  choices: z.array(
    z.object({
      index: z.number().int(),
      message: GPTMessageSchema,
      finish_reason: z.string().optional()
    })
  ),
  usage: z.object({
    prompt_tokens: z.number().int(),
    completion_tokens: z.number().int(),
    total_tokens: z.number().int()
  }),
  system_fingerprint: z.string().nullable()
});

export type GPTMessage = z.infer<typeof GPTMessageSchema>;
export type GPTResponse = z.infer<typeof GPTResponseSchema>;
