import styles from './MessageList.module.scss';
import { Message } from '../message/Message';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MessageList = () => {
  const { chatId } = useParams();

  const messages = useSelector((state) => state.messages[chatId]);

  const ref = useRef();

  useEffect(() => {
    if (messages) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages]);

  return (
    <div className={styles.list}>
      {messages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
      <div ref={ref} />
    </div>
  );
};
