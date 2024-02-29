import styles from './Chat.module.scss';
import { Form } from '../form/Form';
import { MessageList } from '../messageList/MessageList';

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <MessageList />
      <Form />
    </div>
  );
};
