import { createSelector, createSlice } from "@reduxjs/toolkit";
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
    reducers: {
        changeFilter: (state, action) => {
            state.filters.name = action.payload;
        }
    },
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
               state.contacts.items = state.contacts.items.filter(
                    (contact) => contact.id !== action.payload.id);
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteContact.rejected, statusRejected)
            .addCase(deleteContact.pending, statusPending)
        
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.items.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(addContact.rejected, statusRejected)
            .addCase(addContact.pending, statusPending);
    },
});


export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectContact = (state) => state.contacts.contacts.items;
export const selectFilter = (state) => state.contacts.filters.name;
export const { changeFilter } = contactsSlice.actions;

export const selectFilteredContacts = createSelector([selectContact, selectFilter],
    (contacts, filter) => {
        return contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()))
    });

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = contactsSlice.reducer;








