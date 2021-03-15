import axios from 'axios';
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

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const userToken = {
  set: token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const setTokenToLocalStorage = token => {
  localStorage.setItem('token', token ? token : '');
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token ?? null;
};

export const registration = data => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', data);
    userToken.set(response.data.token);
    // setTokenToLocalStorage(response.data.token)
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const login = data => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', data);
    userToken.set(response.data.token);
    // setTokenToLocalStorage(response.data.token)
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');
    userToken.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const state = getState();

  dispatch(getCurrentUserRequest());

  try {
    userToken.set(state.auth.token);
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
  }
};
