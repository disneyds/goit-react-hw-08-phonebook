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

export const registration = data => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', data);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const login = data => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', data);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error));
  }

  // axios
  //   .post('/users/login', contact)
  //   .then(({ data }) => {
  //     dispatch(addContactSuccess(data));
  //   })
  //   .catch(error => {
  //     dispatch(addContactError(error));
  //   });
};

// export const logout = id => dispatch => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => {
//       dispatch(deleteContactSuccess(id));
//     })
//     .catch(error => {
//       dispatch(deleteContactError(error));
//     });
// };
