import React, { useEffect, useRef, useState } from "react";

import { GPTMessage, GPTMessageSchema } from "@/lib/chatbot/validators";

import Message from "./message";

import styles from "./assistant.module.css";

function Assistant() {
  const [chatOpen, setChatOpen] = useState(false);
  const [userText, setUserText] = useState("");
  const [messages, setMessages] = useState<GPTMessage[]>([]);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  /* Calls the server for GPT response */
  const getMessage = async (payload: GPTMessage[]): Promise<GPTMessage> => {
    const response = await fetch("http://localhost:3000/api/chatbot/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    const reply = GPTMessageSchema.safeParse(data);
    if (reply.success) return reply.data;
    return { role: "system", content: "Sorry, please try again" };
  };

  /* Get GPT initial intro message */
  useEffect(() => {
    const getInitialMessage = async () => {
      const initialMessage = await getMessage([]);
      setMessages([initialMessage]);
    };
    if (messages.length == 0) getInitialMessage();
    scrollToBottom();
  }, [messages]);

  /* Scrolls to the bottom of the chat window */
  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  /* Enter key submits user typed message */
  const handleEnterKey = async (event: React.KeyboardEvent) => {
    if (event.key == "Enter" && !event.shiftKey) {
      event.preventDefault();
      const userMessage: GPTMessage = { role: "user", content: userText };
      setUserText("");
      setMessages((prev) => [...prev, userMessage]);
      const reply = await getMessage([...messages, userMessage]);
      setMessages((prev) => [...prev, reply]);
    }
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="absolute bottom-0 right-0">
      {/* Chat window */}
      <div className={`${chatOpen ? styles.windowOpen : styles.windowClosed}`}>
        {/* Top "assistant" bar */}
        <div className="flex basis-1/12 items-center justify-center border-b">
          Assistant
        </div>
        {/* Message display area */}
        <div
          className="flex basis-9/12 flex-col gap-1 overflow-scroll p-2"
          ref={messagesRef}
        >
          {messages.map((message, i) => (
            <Message key={i} role={message.role} content={message.content} />
          ))}
        </div>
        {/* Text input area */}
        <div className="basis-2/12 border-t">
          <textarea
            className={`${chatOpen && styles.textOpen}`}
            value={userText}
            onKeyDown={handleEnterKey}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="Aa"
          />
        </div>
      </div>
      <button
        className={chatOpen ? styles.buttonOpen : styles.buttonClosed}
        onClick={toggleChat}
      >
        {chatOpen ? "X" : "Open chat"}
      </button>
    </div>
  );
}

export default Assistant;
