import { useState } from 'react';
import { Message } from './components/message/Message';

export const App = () => {
  const [message, setMessage] = useState('hello');

  return <Message message={message} />;
};
