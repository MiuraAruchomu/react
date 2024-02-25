import styles from './ChatList.module.scss';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const ChatList = ({ chats }) => {
  return (
    <>
      <div className={styles.head}>CHATS</div>
      <Box
        sx={{
          width: '100%',
          height: 200,
          maxWidth: 360,
          borderRadius: '15px',
          bgcolor: '#444444',
          overflow: 'scroll',
        }}
      >
        <List>
          {Object.keys(chats).map((chat) => {
            return (
              <ListItem key={chats[chat].id} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={chats[chat].name}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};
