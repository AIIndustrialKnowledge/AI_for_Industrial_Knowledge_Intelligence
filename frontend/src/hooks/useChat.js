import { useState } from "react";

function useChat() {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I am your Industrial AI Assistant. Ask me anything."
    }
  ]);

  const [loading, setLoading] = useState(false);

  const addMessage = (sender, text) => {

    setMessages(prev => [
      ...prev,
      {
        sender,
        text
      }
    ]);

  };

  return {

    messages,
    loading,
    setLoading,
    addMessage

  };

}

export default useChat;