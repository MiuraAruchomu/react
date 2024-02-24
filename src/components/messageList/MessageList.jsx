import styles from './MessageList.module.scss';
import { Message } from '../message/Message';
import { useEffect, useRef } from 'react';

export const MessageList = ({ messages }) => {
  const ref = useRef();

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages.length]);

  return (
    <div className={styles.list}>
      {messages.map((message) => {
        return <Message message={message} />;
      })}
      <div ref={ref} />
    </div>
  );
};
