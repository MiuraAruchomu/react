import styles from './Message.module.scss';

export const Message = ({ message }) => {
  return message.author == 'Bot' ? (
    <div className={styles.message}>
      <div className={`${styles.author__bot}`}>{message.author}</div>:
      <div className={`${styles.text__bot}`}>{message.text}</div>
    </div>
  ) : (
    <div className={styles.message}>
      <div className={styles.author}>{message.author}</div>:
      <div className={styles.text}>{message.text}</div>
    </div>
  );
};
