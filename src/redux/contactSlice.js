import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

const formDatailsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending] (state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled] (state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected] (state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload.id);
    },
  }
});

export const formDatailsReducer = formDatailsSlice.reducer;


