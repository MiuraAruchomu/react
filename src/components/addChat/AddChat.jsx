import styles from './AddChat.module.scss';
import { useState } from 'react';
import Button from '@mui/material/Button';

export const AddChat = ({ setChats }) => {
  const [value, setValue] = useState('');

  const onChangeChatName = (e) => {
    setValue(e.target.value);
  };
  const onAddChat = (e) => {
    e.preventDefault();
    setChats((prev) => {
      const newChats = { ...prev };
      const newId = Date.now();
      newChats[newId] = {
        id: newId,
        name: value,
        messages: [],
      };
      setValue('');
      return newChats;
    });
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
