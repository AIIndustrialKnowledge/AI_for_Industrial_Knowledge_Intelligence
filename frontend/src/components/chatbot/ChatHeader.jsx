import "./ChatBot.css";

function ChatHeader({ onClose }) {
  return (
    <div className="chat-header">
      <div className="chat-title">
        🤖 Industrial AI Assistant
      </div>

      <button
        className="close-btn"
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  );
}

export default ChatHeader;