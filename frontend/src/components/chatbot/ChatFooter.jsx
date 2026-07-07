import { useState } from "react";
import "./ChatBot.css";

function ChatFooter({ onSend }) {

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (input.trim() === "") return;

    onSend(input);

    setInput("");

  };

  return (

    <div className="chat-footer">

      <input
        type="text"
        placeholder="Ask me anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button onClick={handleSend}>
        Send
      </button>

    </div>

  );

}

export default ChatFooter;