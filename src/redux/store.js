// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
// const store = configureStore({
//   reducer: rootReducer,
// });

import { createStore } from "redux";
//import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  };

  const rootReducer = (state = initialState, action) => {
    return state;
  };

  export const store = createStore(rootReducer);

// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedRootReducer,
// });

// export const persistor = persistStore(store);