import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FETCH, ADD, DELETE, FILTER, CONTACT_ID } from '../contacts/types';

axios.default.baseURL = 'https://61ed902f634f2f00170cec65.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(FETCH, async () => {
  const { data } = await axios.get('/contacts');
  return data;
});
