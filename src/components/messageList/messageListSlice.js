import { createSlice } from '@reduxjs/toolkit';

export const messageListSlice = createSlice({
  name: 'messageList',
  initialState: {},
  reducers: {
    addMessages: (state, action) => {
      state[action.payload.id] = [];
    },
    removeMessages: (state, action) => {
      delete state[action.payload.id];
    },
    sendMessage: (state, action) => {
      state[action.payload.id].push(action.payload.message);
    },
  },
});

export const { addMessages, removeMessages, sendMessage } =
  messageListSlice.actions;
export default messageListSlice.reducer;
