import { createSlice } from '@reduxjs/toolkit';

export const chatListSlice = createSlice({
  name: 'chatList',
  initialState: {},
  reducers: {
    addChat: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    removeChat: (state, action) => {
      delete state[action.payload.id];
    },
  },
});

export const { addChat, removeChat } = chatListSlice.actions;
export default chatListSlice.reducer;
