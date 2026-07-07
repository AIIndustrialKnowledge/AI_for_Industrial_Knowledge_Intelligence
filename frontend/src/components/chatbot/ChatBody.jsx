import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import "./ChatBot.css";

function ChatBody({ messages = [], loading }) {
  return (
    <div className="chat-body">
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}

      {loading && <TypingIndicator />}
    </div>
  );
}

export default ChatBody;