import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authActions';

const initialState = {
  auth: {
    name: null,
    email: null,
  },
};

const user = createReducer(initialState.auth, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,

  // [deleteContactSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload.message,
  [loginError]: (_, { payload }) => payload.message,
});

export default combineReducers({
  user,
  token,
  error,
});
