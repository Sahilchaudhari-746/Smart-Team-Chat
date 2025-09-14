import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa"; // user icon

const NewChat = ({ onBack }) => {
  const [name, setName] = useState('');
  const [icebreaker, setIcebreaker] = useState('');

  const handleGenerateIcebreaker = () => {
    setIcebreaker(`Hey ${name}, excited to collaborate! What's your favorite productivity hack?`);
  };

  return (
    <div className="chat-container">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2>Start New Chat</h2>

      <input
        type="text"
        placeholder="Enter participant name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="chat-input"
      />

      <button className="icebreaker-btn" onClick={handleGenerateIcebreaker}>
        Generate Icebreaker
      </button>

      {icebreaker && (
        <div className="chat-response">
          <div className="chat-header">
            <FaUserCircle size={32} style={{ marginRight: "8px" }} />
            <span className="chat-name">{name}</span>
          </div>
          <p className="chat-message">{icebreaker}</p>
        </div>
      )}
    </div>
  );
};

export default NewChat;
