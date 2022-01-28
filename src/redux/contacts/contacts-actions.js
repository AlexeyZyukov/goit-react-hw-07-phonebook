import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const deleteContact = createAction('contacts/DELETE');
export const filterContacts = createAction('contacts/FILTER');
// import { ADD, DELETE, FILTER } from './types';

// const addContact = createAction(ADD);

// const deleteContact = createAction(DELETE);
// const filterContacts = createAction(FILTER);

// export default { addContact, filterContacts };
