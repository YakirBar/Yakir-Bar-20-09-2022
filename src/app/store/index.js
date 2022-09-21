import weatherSlice from './weatherSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    weatherSlice: weatherSlice
  }
});