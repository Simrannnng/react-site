import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import jobDetailsReducer from './jobDetailsSlice';

const persistConfig = {
  key: 'root',
  storage,
  
};

const persistedReducer = persistReducer(persistConfig, jobDetailsReducer);

const store = configureStore({
  reducer: {
    jobDetails: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }), 
});

export const persistor = persistStore(store);
export default store;
