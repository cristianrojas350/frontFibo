import { configureStore } from '@reduxjs/toolkit';
import fibonacciReducer from './fibonacciSlice';

const store = configureStore({
  reducer: {
    fibonacci: fibonacciReducer,
  },
});

export default store;
