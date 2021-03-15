import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebookReducer';
import authReducer from './auth/authReducer';
import { tokenMidleware } from './midleware/tokenMidleware';

const middleware = [...getDefaultMiddleware(), logger, tokenMidleware];
const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
