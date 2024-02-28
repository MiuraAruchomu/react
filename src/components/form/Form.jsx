import styles from './Form.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

export const Form = ({ setChats, chatId }) => {
  const [value, setValue] = useState('');

  const author = useSelector((state) => state.profile.name);

  const ref = useRef();

  const onChangeMessage = (e) => {
    setValue(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    setChats((prev) => {
      const newMessage = {
        author: author.value,
        text: value,
        id: Date.now(),
      };
      const newChats = { ...prev };
      newChats[chatId].messages.push(newMessage);
      return newChats;
    });
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
