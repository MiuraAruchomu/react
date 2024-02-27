import styles from './Chat.module.scss';
import { Form } from '../form/Form';
import { MessageList } from '../messageList/MessageList';
import { useParams, useOutletContext } from 'react-router-dom';

export const Chat = () => {
  const [chatList, setChatList] = useOutletContext();
  const { chatId } = useParams();

  return (
    <div className={styles.chat}>
      <MessageList messages={chatList[chatId].messages} />
      <Form setChats={setChatList} chatId={chatId} />
    </div>
  );
};
