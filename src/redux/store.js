import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';

import { authReducer } from './auth/auth-slice';

import { contactsReducer } from './contactsSlice';

import storage from 'redux-persist/lib/storage';

import persistReducer from 'redux-persist/es/persistReducer';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    authorization: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
