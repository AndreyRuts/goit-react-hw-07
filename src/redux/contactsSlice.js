import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";


const initialState = {
  contacts: {
        items: [],
        loading: false,
        error: null,
    },
    filters: {
        name: '',
    },
};
const statusRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}
const statusPending = (state) => {
    state.loading = true;
    state.error = null;
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.items = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, statusRejected)
            .addCase(fetchContacts.pending, statusPending)

            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contact.items = state.contact.items.filter(
                    (contact) => contact.id !== action.payload);
            })
            .addCase(deleteContact.rejected, statusRejected)
            .addCase(deleteContact.pending, statusPending)
        
            .addCase(addContact.fulfilled, (state, action) => {
                state.contact.items.push(action.payload);
            })
            .addCase(addContact.rejected, statusRejected)
            .addCase(addContact.pending, statusPending);
    },
});



export const contactsReducer = contactsSlice.reducer;


export const selectContact = (state) => state.contacts.contacts.items;




export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
