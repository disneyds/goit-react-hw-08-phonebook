import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebookActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(fetchContactSuccess(data));
    })
    .catch(error => {
      dispatch(fetchContactError(error));
      if (error.response.status === 404) toast.info('Тут ещё нет контактов.');
    });
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(error => {
      dispatch(addContactError(error));
      if (error.response.status === 400)
        toast.warn('Неудалось создать контакт. Попробуйте ещё раз!');
    });
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(error => {
      dispatch(deleteContactError(error));
      if (error.response.status === 404)
        toast.warn('Контакт уже удалён, попробуйте перезайти!');
    });
};
