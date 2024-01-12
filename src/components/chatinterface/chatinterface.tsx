import React, { useState } from "react";
import ChatBot from "../ChatBot/assistant";
import MessengerEmbed from "../messengerembed/messengerembed";

export default function ChatInterface() {
  const [showChatbot, setShowChatbot] = useState(true);

  const toggleChatType = () => {
    setShowChatbot(false);
  };

  return (
    <div>
      {showChatbot ? (
        <div>
          <ChatBot />
          <button onClick={toggleChatType}>Switch to MessengerEmbed</button>
        </div>
      ) : (
        <MessengerEmbed />
      )}
    </div>
  );
}
