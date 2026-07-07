import { useState } from "react";

import "./ChatBot.css";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

import useChat from "../../hooks/useChat";
import sendMessage from "../../services/chatService";

function ChatBot() {

  const [open, setOpen] = useState(false);
  console.log("Open =", open);

  const {
    messages,
    loading,
    setLoading,
    addMessage
  } = useChat();

  const handleSend = async (question) => {

    addMessage("user", question);

    setLoading(true);

    const response = await sendMessage(question);

    setLoading(false);

    addMessage("bot", response.reply);

  };

  return (

    <>

      <button
    className="chat-toggle"
   onClick={() => {
  alert("Button clicked");
  setOpen((prev) => !prev);
}}
>
    💬
</button>

      {

        open && (

          <div className="chat-container">

            <ChatHeader
              onClose={() => setOpen(false)}
            />

            <ChatBody
              messages={messages}
              loading={loading}
            />

            <ChatFooter
              onSend={handleSend}
            />

          </div>

        )

      }

    </>

  );

}

export default ChatBot;