import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    showName: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    tongleShowName: (state) => {
      if (state.showName) {
        state.showName = false;
      } else {
        state.showName = true;
      }
    },
  },
});

export const { setName, tongleShowName } = profileSlice.actions;
export default profileSlice.reducer;
