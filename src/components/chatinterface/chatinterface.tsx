import React, { useState } from 'react';
import ChatBot from "../ChatBot/assistant";
import MessengerEmbed from '../messengerembed/messengerembed';

export default function ChatInterface() {
    const [showChatbot, setShowChatbot] = useState(true);
  
    const toggleChatType = () => {
      setShowChatbot(!showChatbot);
    };
  
    return (
      <div>
      {showChatbot ? <ChatBot onToggleChat={toggleChatType} /> : <MessengerEmbed />}
      </div>
    );
  }

//for assistant.tsx code

  //   const Chatbot = ({ onToggleChat }) => {
//     // ... your existing code ...
  
//     return (
//       <div>
//         {/* ... your existing code ... */}
//         <button onClick={onToggleChat}>Switch to Human Chat</button>
//       </div>
//     );
//   };