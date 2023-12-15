import React from "react";

import { GPTMessage } from "@/lib/chatbot/validators";

const styles = {
  user: "bg-lime-700 self-end",
  system: "bg-rose-400 self-center",
  assistant: "bg-cyan-600"
};

function Message({ role, content }: GPTMessage) {
  return (
    <div className={`${styles[role]} max-w-[80%] rounded-md p-1 text-white`}>
      {content}
    </div>
  );
}

export default Message;
