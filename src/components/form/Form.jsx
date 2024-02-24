import styles from './Form.module.scss';
import { useEffect, useState } from 'react';

export const Form = ({ messages, setMessages }) => {
  const [value, setValue] = useState('');

  const onChangeMessage = (e) => {
    setValue(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      author: 'Me',
      text: value,
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setValue('');
  };

  useEffect(() => {}, [value]);

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        onChange={onChangeMessage}
        value={value}
      />
      <button className={styles.btn} onClick={onSendMessage}>
        SEND
      </button>
    </form>
  );
};
