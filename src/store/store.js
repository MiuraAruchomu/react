import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../components/profile/profileSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
});
