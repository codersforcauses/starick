import React, { useEffect, useRef, useState } from "react";

import { GPTMessage, GPTMessageSchema } from "@/lib/chatbot/validators";
import MessengerEmbed from "../messengerembed/messengerembed";

import Bubble from "./bubble";
import Message from "./message";

import styles from "./assistant.module.css";

function Assistant() {
  const [chatOpen, setChatOpen] = useState(false);
  const [userText, setUserText] = useState("");
  const [messages, setMessages] = useState<GPTMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [showChatbot, setShowChatbot] = useState(true);

  /* Calls the server for GPT response */
  const getMessage = async (payload: GPTMessage[]): Promise<GPTMessage> => {
    const response = await fetch("/api/chatbot/message", {
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
      setIsLoading(true);
      const initialMessage = await getMessage([]);
      setMessages([initialMessage]);
      setIsLoading(false);
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
      var lastMessage;
      if (messages.length > 0) {
        lastMessage = messages.slice(-1)[0].role;
      }
      if (lastMessage !== "assistant" || userText.length < 3) return; // prevent spamming of enter button
      const userMessage: GPTMessage = { role: "user", content: userText };
      setUserText("");
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      const reply = await getMessage([...messages, userMessage]);
      setMessages((prev) => [...prev, reply]);
      setIsLoading(false);
    }
  };

  //Switch to MessengerEmbed
  const switchToMessengerEmbed = () => {
    setShowChatbot(false);
  };

  if (!showChatbot) {
    return <MessengerEmbed />;
  }

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 z-10 mb-6 mr-6 flex flex-col gap-1">
      {/* Chat window */}
      <div className={`${chatOpen ? styles.windowOpen : styles.windowClosed}`}>
        {/* Top "assistant" bar */}
        <div className="flex basis-1/12 items-center justify-center border-b">
          Assistant
        </div>
        {/* Message display area */}
        <div
          className="flex basis-9/12 flex-col overflow-scroll p-2"
          ref={messagesRef}
        >
          <div className="flex flex-col gap-1">
            {messages.map((message, i) => (
              <Message key={i} role={message.role} content={message.content} />
            ))}
            <button onClick={switchToMessengerEmbed}>
              Switch to MessengerEmbed
            </button>
          </div>
          {isLoading && (
            <div className="self-end px-6 pt-4">
              <div className={styles.loading}></div>
            </div>
          )}
        </div>
        {/* Text input area */}
        <div className="m-2 basis-2/12 border-t">
          <textarea
            className={`${chatOpen && styles.textOpen}`}
            value={userText}
            onKeyDown={handleEnterKey}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="Ask a question..."
          />
        </div>
      </div>
      <button className="mt-2 self-end" onClick={toggleChat}>
        <Bubble />
      </button>
    </div>
  );
}

export default Assistant;
