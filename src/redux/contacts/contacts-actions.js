import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE, FILTER } from './types';

const addContact = createAction(ADD, ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(DELETE);
const filterContacts = createAction(FILTER);

export default { addContact, deleteContact, filterContacts };
