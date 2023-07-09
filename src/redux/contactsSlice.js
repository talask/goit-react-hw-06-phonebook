import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    // filter: '',
    
  };

  const contactsSlice = createSlice({
        name: "contacts",
  
        initialState: contactsInitialState,
  
        reducers: {
            addContact(state, action) {
                    console.log(action.payload);
                    state.contacts.push({...action.payload, id: nanoid()});
            },
            deleteContact(state, action) {
                state.contacts = state.contacts.filter(contact => action.payload !== contact.id);
            },
            filterChange(state,action) {
                state.contacts = state.contacts.filter(contact => {
                    console.log(contact.name)
                    return contact.name.toLowerCase().includes(action.payload.toLowerCase())
                });
            }
        },

  });


export const { addContact, deleteContact, filterChange } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const getContacts = state => state.contacts.contacts;