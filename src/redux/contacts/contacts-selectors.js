export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const filterContacts = state => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  return allContacts.filter(contacts =>
    contacts.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );
};
