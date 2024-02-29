import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../components/profile/profileSlice';
import chatListReducer from '../components/chatList/chatListSlice';
import messageListReducer from '../components/messageList/messageListSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    chats: chatListReducer,
    messages: messageListReducer,
  },
});
