import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import { MessageList } from './components/messageList/MessageList';
import { Form } from './components/form/Form';
import { ChatList } from './components/chatList/ChatList';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState({
    'chat-1': {
      id: 1,
      name: 'chat1',
    },
    'chat-2': {
      id: 2,
      name: 'chat2',
    },
    'chat-3': {
      id: 3,
      name: 'chat3',
    },
    'chat-4': {
      id: 4,
      name: 'chat4',
    },
    'chat-5': {
      id: 5,
      name: 'chat5',
    },
    'chat-6': {
      id: 6,
      name: 'chat6',
    },
  });

  useEffect(() => {
    if (
      messageList.length !== 0 &&
      messageList[messageList.length - 1].author !== 'Bot'
    ) {
      setTimeout(() => {
        const newBotMessage = {
          author: 'Bot',
          text: `Hello, I'am Bot :)`,
          id: Date.now(),
        };
        const newMessages = [...messageList, newBotMessage];
        setMessageList(newMessages);
      }, 500);
    }
  }, [messageList]);
  return (
    <div className={styles.app}>
      <ChatList chats={chatList} />
      <MessageList messages={messageList} />
      <Form messages={messageList} setMessages={setMessageList} />
    </div>
  );
};
