import { apiSlice } from "app/api/apiSlice";

export const contactsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `contacts`,
      tagTypes: ["Contacts"],
      providesTags: ["Contacts"],
    }),
    addContact: build.mutation({
      query: (newContact) => ({
        url: "/contacts",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: build.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    updateContact: build.mutation({
      query: ({ id, newData }) => ({
        url: `/contacts/${id}`,
        method: "PATCH",
        body: { ...newData },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useAddContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApiSlice;
