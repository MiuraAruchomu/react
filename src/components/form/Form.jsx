import styles from './Form.module.scss';
import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';

export const Form = ({ messages, setMessages }) => {
  const [value, setValue] = useState('');

  const ref = useRef();

  const onChangeMessage = (e) => {
    setValue(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      author: 'Me',
      text: value,
      id: Date.now(),
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setValue('');
  };

  useEffect(() => {
    ref.current?.focus();
  }, [value]);

  return (
    <form className={styles.form} onSubmit={onSendMessage}>
      <input
        className={styles.input}
        onChange={onChangeMessage}
        value={value}
        ref={ref}
      />
      {/* <button className={styles.btn} onClick={onSendMessage}>
        SEND
      </button> */}
      <Button
        variant='contained'
        type='button'
        style={{
          width: '200px',
          height: '50px',
          marginTop: '25px',
          backgroundColor: '#444444',
        }}
        onClick={onSendMessage}
      >
        SEND
      </Button>
    </form>
  );
};
