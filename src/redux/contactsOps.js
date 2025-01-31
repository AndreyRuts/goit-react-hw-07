import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://679ca8d687618946e652f306.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thukAPI) => {
        try {
            const { data } = await axios.get('/contacts');           
            return data;
        } catch (error) {
            return thukAPI.rejectWithValue(error.message);
        }
    },
);

export const addContact = createAsyncThunk('contacts/addContact',
    async (newContact, thukAPI) => {
        try {
            const { data } = await axios.post('/contacts', newContact);           
            return { ...data, id: Number(data.id) };
        } catch (error) {
            return thukAPI.rejectWithValue(error.message);
        }
    },
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactId, thukAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${contactId}`);
            return data;
        } catch (error) {
            return thukAPI.rejectWithValue(error.message);
        }
    },
);

