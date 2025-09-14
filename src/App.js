import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';

const App = () => {
  const [screen, setScreen] = useState('list');
  const [selectedChat, setSelectedChat] = useState(null); // track selected chat

  const renderScreen = () => {
    switch (screen) {
      case 'list':
        return (
          <ChatList
            onSelectChat={(chat) => {
              setSelectedChat(chat); // store selected chat
              setScreen('chat');      // switch to chat screen
            }}
          />
        );
      case 'chat':
        return (
          <ChatWindow
            chat={selectedChat}          // pass chat object
            onBack={() => setScreen('list')}
          />
        );
      case 'new':
        return <NewChat onBack={() => setScreen('list')} />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="app-header">
        <h1>Smart Team Chat</h1>
        <button onClick={() => setScreen('new')}>+ New Chat</button>
      </header>
      <div className="screen-container">
        {renderScreen()}
      </div>
    </>
  );
};

export default App;
