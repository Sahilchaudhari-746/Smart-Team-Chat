import React from 'react';
import { chats } from '../data/dummyData';
import { MdGroups, MdWork, MdCampaign } from 'react-icons/md'; // import icons

const ChatList = ({ onSelectChat }) => {
  const getIcon = (name) => {
    if (name.toLowerCase().includes("design")) return <MdGroups className="chat-icon" />;
    if (name.toLowerCase().includes("dev")) return <MdWork className="chat-icon" />;
    if (name.toLowerCase().includes("marketing")) return <MdCampaign className="chat-icon" />;
    return <MdGroups className="chat-icon" />;
  };

  return (
    <div>
      <h2>Team Chats</h2>
      {chats.map(chat => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => onSelectChat(chat)} // pass entire chat
        >
          {getIcon(chat.name)}
          <div className="chat-info">
            <strong>{chat.name}</strong>
            <p>{chat.lastMessage}</p>
          </div>
          <span>{chat.time}</span>
        </div>
      ))}
    </div>
  );
};


export default ChatList;
