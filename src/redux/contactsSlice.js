import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";


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
    },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


export const selectContact = (state) => state.contacts.contacts.items;




export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
