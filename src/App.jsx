import styles from './App.module.scss';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { ChatList } from './components/chatList/ChatList';
import { NoChat } from './components/noChat/NoChat';
import { AddChat } from './components/addChat/AddChat';
import { useSelector } from 'react-redux';

export const App = () => {
  const { chatId } = useParams();

  const selectChat = useSelector((state) => state.chats[chatId]);

  useEffect(() => {}, [chatId]);
  return (
    <div className={styles.app}>
      <AddChat />
      <ChatList />
      {selectChat ? <Outlet /> : <NoChat />}
    </div>
  );
};
