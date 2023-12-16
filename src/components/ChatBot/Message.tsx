import React from "react";

import { GPTMessage } from "@/lib/chatbot/validators";

const styles = {
  user: "bg-[--starick-orange] text-white self-end",
  system: "bg-rose-400 self-center",
  assistant: "bg-[--messenger-grey] text-[--starick-black]"
};

function Message({ role, content }: GPTMessage) {
  return (
    <div className={`${styles[role]} max-w-[80%] rounded-md p-1`}>
      {content}
    </div>
  );
}

export default Message;
