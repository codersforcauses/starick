import { GPTMessage, GPTMessageSchema } from "@/lib/chatbot/validators";
import { useEffect, useState } from "react";
import Message from "./Message";

const styles = {
  active: "h-[448px] w-96 border rounded-md drop-shadow-md",
  closed: "h-0 border-none",
  button_closed: "h-32 w-32 border m-2 bg-[--starick-orange]",
  button_active: "absolute top-0 right-0 m-2"
};

function ChatWindow() {
  const [windowOpen, setWindowOpen] = useState(false);
  const [messages, setMessages] = useState<GPTMessage[]>([]);

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
    if (!reply.success) {
      return {
        role: "system",
        content: "Sorry, there was an issue, please try again."
      };
    }
    return reply.data;
  };

  const handleClick = () => {
    setWindowOpen(!windowOpen);
  };

  useEffect(() => {
    const fetchInitialMessage = async () => {
      if (windowOpen && messages.length == 0) {
        const message = await getMessage(messages);
        setMessages([message]);
      }
    };
    fetchInitialMessage();
  }, [windowOpen, messages]);

  return (
    <div className="fixed bottom-0 right-5">
      <div
        className={`flex flex-col ${
          windowOpen ? styles["active"] : styles["closed"]
        } transition-all delay-200`}
      >
        <div
          className={`basis-1/12 bg-slate-200 p-1 text-center ${
            windowOpen ? "" : "hidden"
          }`}
        >
          Assistant
        </div>
        <div
          className={`basis-10/12 overflow-scroll p-2 ${
            windowOpen ? "" : "hidden"
          }`}
        >
          {messages.map((message, i) => (
            <Message key={i} role={message.role} content={message.content} />
          ))}
        </div>
        <div
          className={`m-1 basis-1/12 drop-shadow-none ${
            windowOpen ? "" : "hidden"
          }`}
        >
          <textarea
            className="h-full w-full resize-none rounded-md border p-1"
            placeholder="Ask a question..."
          />
        </div>
      </div>
      <button
        className={
          windowOpen ? styles["button_active"] : styles["button_closed"]
        }
        onClick={handleClick}
      >
        {windowOpen ? "X" : "open chat image"}
      </button>
    </div>
  );
}

export default ChatWindow;
