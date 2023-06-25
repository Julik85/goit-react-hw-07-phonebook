import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6495c1b1b08e17c91792a2bc.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
           const response = await axios.get('/contacts');
           return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post('/contacts', contact);
            return responce.data;            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const delContact = createAsyncThunk (
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactId}`);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const toggleCompleted = createAsyncThunk(
    'contacts/toogleCompleted',
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.put(`/conracts/${contact.id}`, {
                completed: !contact.completed,
            });
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);