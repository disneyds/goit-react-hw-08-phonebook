import { setTokenToLocalStorage } from 'redux/auth/authOperations';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserError,
} from '../auth/authActions';

export const tokenMidleware = store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case registerSuccess.toString(): {
      setTokenToLocalStorage(payload.token);
      return next(action);
    }
    case loginSuccess.toString(): {
      setTokenToLocalStorage(payload.token);
      return next(action);
    }
    case getCurrentUserError.toString(): {
      setTokenToLocalStorage();
      return next(action);
    }
    case logoutSuccess.toString(): {
      setTokenToLocalStorage();
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};
