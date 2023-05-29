import { configureStore } from '@reduxjs/toolkit';
import prodSlice from './slices/prodSlice';

const store = configureStore({
  reducer: {
    products: prodSlice,
  },
});

export default store;