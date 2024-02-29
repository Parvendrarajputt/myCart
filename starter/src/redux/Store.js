// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/Slices/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
