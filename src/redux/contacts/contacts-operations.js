import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contacts-actions';

const baseURL = 'https://61ed902f634f2f00170cec65.mockapi.io';
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axiosInstance
    .get('/contacts')
    .then(({ data }) => {
      console.log('data', data);
      dispatch(fetchContactSuccess(data.items));
    })
    .catch(error => dispatch(fetchContactError(error)));
};
export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contacts = { name, number };
    dispatch(addContactRequest());

    axiosInstance
      .post('/contacts', contacts)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

export const delContact = contactsId => dispatch => {
  dispatch(delContactRequest());

  axiosInstance
    .delete(`/contacts/${contactsId}`)
    .then(() => dispatch(delContactSuccess(contactsId)))
    .catch(error => dispatch(delContactError(error)));
};
