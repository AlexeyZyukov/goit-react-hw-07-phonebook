// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts-operations';
import contactsAction from './contacts-actions';

const contactsReducer = createReducer([], {
  [fetchContacts.addContact]: (state, action) => [...state, action.payload],
  [fetchContacts.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [fetchContacts.filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
