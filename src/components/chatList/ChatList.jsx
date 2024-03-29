import styles from './ChatList.module.scss';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeChat } from '../chatList/chatListSlice';
import { removeMessages } from '../messageList/messageListSlice';

export const ChatList = () => {
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const onDeleteChat = (e) => {
    const id = e.target.id;
    dispatch(removeChat({ id }));
    dispatch(removeMessages({ id }));
  };

  return (
    <>
      <div className={styles.head}>CHATS</div>
      <Box
        sx={{
          width: '100%',
          height: 200,
          maxWidth: 360,
          borderRadius: '15px',
          bgcolor: '#3a3a3a',
          overflow: 'scroll',
        }}
      >
        <List>
          {Object.keys(chats).map((chat) => {
            return (
              <Link
                to={`/chat/${chats[chat].id}`}
                key={chats[chat].id}
                className={styles.link}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={chats[chat].name}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#fff',
                      }}
                    />
                    <Button
                      variant='contained'
                      style={{
                        width: '25px',
                        height: '25px',
                        backgroundColor: '#444444',
                      }}
                      onClick={onDeleteChat}
                      id={chats[chat].id}
                    >
                      x
                    </Button>
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Box>
    </>
  );
};
