import { createAction } from '@reduxjs/toolkit';
import { ADD, DELETE, FILTER } from './types';

const addContact = createAction(ADD);

const deleteContact = createAction(DELETE);
const filterContacts = createAction(FILTER);

export default { addContact, filterContacts };

// import { createAction } from '@reduxjs/toolkit';

// const asyncGetContacts = createAction('contacts/get');
// export default { asyncGetContacts };

// export const fetchContactRequest = createAction('contacts/fetchContactRequest');
// export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
// export const fetchContactError = createAction('contacts/fetchContactError');

// export const addContactRequest = createAction('contacts/addContactRequest');
// export const addContactSuccess = createAction('contacts/addContactSuccess');
// export const addContactError = createAction('contacts/addContactError');

// export const delContactRequest = createAction('contacts/delContactRequest');
// export const delContactSuccess = createAction('contacts/delContactSuccess');
// export const delContactError = createAction('contacts/delContactError');

// export const delContacts = createAction('contacts/DELETE');
// export const filterContacts = createAction('contacts/FILTER');

// export const fetchContactRequest = createAction('contacts/fetchContactRequest');
// export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
// export const fetchContactError = createAction('contacts/fetchContactError');

// export const deleteContact = createAction('contacts/DELETE');
// export const filterContacts = createAction('contacts/FILTER');
//=======================================
