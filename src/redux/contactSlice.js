import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [], filter: '' },
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
        },
    },
});

export const { setContacts, setFilter, addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
