import React, { useState } from 'react';
import { MdArrowBack, MdSummarize, MdLightbulb } from "react-icons/md";

const ChatWindow = ({ chat, onBack }) => {
  const [summary, setSummary] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSummarize = () => {
    setSummary("Summary: The team is discussing sprint progress and login flow.");
  };

  const handleSmartReply = () => {
    setSuggestion("Sounds good! Let me know if you need help.");
  };

  const getInitial = (name) => name.charAt(0).toUpperCase();

  return (
    <div className="chat-container">
      <button className="back-btn" onClick={onBack}>
        <MdArrowBack size={20} /> Back
      </button>

      {/* Show selected chat name */}
      <h2>{chat.name}</h2>

      <div className="chat-thread">
        {chat.messages.map((msg, idx) => (
          <div
            className="chat-message"
            key={idx}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "10px",
              textAlign: "left"
            }}
          >
            <div
              className="avatar"
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "16px"
              }}
            >
              {getInitial(msg.sender)}
            </div>
            <div>
              <strong>{msg.sender}</strong>
              <p style={{ margin: 0 }}>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-actions" style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <button onClick={handleSummarize}>
          <MdSummarize size={18} /> Summarize Thread
        </button>
        <button onClick={handleSmartReply}>
          <MdLightbulb size={18} /> Smart Reply
        </button>
      </div>

      {summary && <p className="chat-response">{summary}</p>}
      {suggestion && <p className="chat-response">{suggestion}</p>}
    </div>
  );
};

export default ChatWindow;
