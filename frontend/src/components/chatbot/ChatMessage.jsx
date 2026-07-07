import "./ChatBot.css";

function ChatMessage({ sender, text }) {

  return (

    <div
      className={
        sender === "user"
          ? "user-message"
          : "bot-message"
      }
    >

      {text}

    </div>

  );

}

export default ChatMessage;