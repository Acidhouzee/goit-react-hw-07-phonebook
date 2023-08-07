import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URL = "https://64ca860a700d50e3c70502b8.mockapi.io";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get(`${API_URL}/contacts`);
            return response.data;
        } catch(error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkApi) => {
        try {
            const response = await axios.post(`${API_URL}/contacts`, newContact);
            return response.data;
        } catch(error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkApi) => {
        try {
            const response = await axios.delete(`${API_URL}/contacts/${contactId}`);
            return response.data;
        } catch(error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);