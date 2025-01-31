import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  contacts: {
    items: [],
  },
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
    }
});

export const selectContact = (state) => state.contacts.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
