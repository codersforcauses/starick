export type GPTAgent = "user" | "system";

export type GPTMessage = {
  role: GPTAgent;
  content: string;
};
