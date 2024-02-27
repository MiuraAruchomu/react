import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { ChatList } from './components/chatList/ChatList';
import { NoChat } from './components/noChat/NoChat';
import { AddChat } from './components/addChat/AddChat';

export const App = () => {
  const [chatList, setChatList] = useState({});

  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatList.length !== 0 &&
      chatList[chatId] &&
      chatList[chatId].messages.length !== 0 &&
      chatList[chatId].messages[chatList[chatId].messages.length - 1].author !==
        'Bot'
    ) {
      setTimeout(() => {
        setChatList((prev) => {
          const newBotMessage = {
            author: 'Bot',
            text: `Hello, I'am Bot :)`,
            id: Date.now(),
          };
          const newChats = { ...prev };
          newChats[chatId].messages.push(newBotMessage);
          return newChats;
        });
      }, 500);
    }
  }, [chatList, chatId]);
  return (
    <div className={styles.app}>
      <AddChat setChats={setChatList} />
      <ChatList chats={chatList} setChats={setChatList} />
      {chatList[chatId] ? (
        <Outlet context={[chatList, setChatList]} />
      ) : (
        <NoChat />
      )}
    </div>
  );
};
