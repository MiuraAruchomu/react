import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import { MessageList } from './components/messageList/MessageList';
import { Form } from './components/form/Form';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (
      messageList.length !== 0 &&
      messageList[messageList.length - 1].author !== 'Bot'
    ) {
      setTimeout(() => {
        const newBotMessage = {
          author: 'Bot',
          text: `Hello, I'am Bot :)`,
        };
        const newMessages = [...messageList, newBotMessage];
        setMessageList(newMessages);
      }, 500);
    }
  }, [messageList]);
  return (
    <div className={styles.app}>
      <MessageList messages={messageList} />
      <Form messages={messageList} setMessages={setMessageList} />
    </div>
  );
};
