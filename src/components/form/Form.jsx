import styles from './Form.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { sendMessage } from '../messageList/messageListSlice';

export const Form = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const { chatId } = useParams();

  const author = useSelector((state) => state.profile.name);

  const ref = useRef();

  const onChangeMessage = (e) => {
    setValue(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      author: author.value,
      text: value,
      id: nanoid(),
    };
    dispatch(sendMessage({ id: chatId, message: newMessage }));
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
