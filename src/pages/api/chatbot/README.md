# Using the chatbot API from the front end

This API only makes use of the `POST` method, all other attempted methods will return a `405 NOT ALLOWED` reponse.

## How to use the API to chat with the bot

**What to send:**

- The API will expect a payload in the form of a `GPTMessage[]` type. The `GPTMessage` type can be imported as `import { GPTMessage } from "@/lib/chatbot/validators";`. Don't forget to add `[]` in front as the API expects an array of this specific type.
- The `GPTMessage` type is an object consisting of two fields, `role`, and `content`.
  - `role` type: is a string of either `user` or `assistant`. `user` indicates a message that has been written by a website visitor, while `assistant` is a response from the GPT assistant.
  - `content` type: is a string containing the message typed by the user, or the returned response from the GPT assistant.
- **Important to Note**: You should maintain an array of all message sent in chronological order between the user and the assistant. The assistant requires all previous messages for context as the chat is not a _session_, rather, it is a singular atomic non-continuous transaction.

**What is received:**

- The assistant response will be a singular `GPTMessage` type as described above.
- Add this message to your local client side array of messages and render however you find appropriate.

**A quick example:**

```
import { GPTMessage, GPTMessageSchema } from "@/lib/chatbot/validators";

const getMessage = async (payload: GPTMessage) => {
  const response = await fetch("/api/chatbot/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const message = await response.json();
  const validation = GPTMessageSchema.safeParse(message);

  if (!validation.success) return validation.error;

  return validation.data;
};
```

This code example uses the `GPTMessageSchema` defined using zod to parse the response to check it is of the correct type, and either returns the error, or the message if successful.
