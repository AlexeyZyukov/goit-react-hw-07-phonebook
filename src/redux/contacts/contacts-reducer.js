// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts-operations';
import { filterContacts } from './contacts-actions';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  // [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  // [deleteContact.fulfilled]: (state, { payload }) =>
  //   state.filter(contact => contact.id !== payload),
});

const loadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filterReducer = createReducer('', {
  [fetchContacts.filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
