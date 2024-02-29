import styles from './AddChat.module.scss';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addChat } from '../chatList/chatListSlice';
import { addMessages } from '../messageList/messageListSlice';

export const AddChat = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onChangeChatName = (e) => {
    setValue(e.target.value);
  };
  const onAddChat = (e) => {
    e.preventDefault();
    const newId = nanoid();
    dispatch(addChat({ id: newId, name: value }));
    dispatch(addMessages({ id: newId }));
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={onAddChat}>
      <input
        className={styles.input}
        onChange={onChangeChatName}
        value={value}
      />
      <Button
        variant='contained'
        style={{
          width: '50px',
          height: '50px',
          marginTop: '25px',
          marginLeft: '15px',
          backgroundColor: '#444444',
        }}
        onClick={onAddChat}
      >
        ADD
      </Button>
    </form>
  );
};
