import { GPTMessage } from '@/lib/chatbot/validators'
import React from 'react'

function ChatWindow() {
  const getMessage = async (payload: GPTMessage[]) => {
    const response = await fetch("/api/chatbot/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const responseMessage = await response.json();
    console.log(responseMessage);
  };

  getMessage([]);

  return <div>HoverButton</div>;
}

export default ChatWindow