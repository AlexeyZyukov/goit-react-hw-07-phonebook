import { createAPI, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createAPI({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61ed902f634f2f00170cec65.mockapi.io/contacts/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
    }),
  }),
});

export const { useFetchContactsQuery } = contactsAPI;
