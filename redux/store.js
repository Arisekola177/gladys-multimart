

import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import gladysReducer from './gladysSlice'




const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, gladysReducer)

export const store = configureStore({
  reducer: { gladys: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
 


  export let persistor = persistStore(store)

