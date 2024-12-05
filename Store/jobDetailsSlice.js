import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const initialState = {
  
  fetchStatus: '', 
 
};

export const saveJobDetails = createAsyncThunk(
  'jobDetails/saveJobDetails',
  async (jobDetails) => {
    console.log('Saving job details:', jobDetails);
    return jobDetails; 
  }
);

const jobDetailsSlice = createSlice({
  name: 'jobDetails',
  initialState,
  reducers: {
    setFetchStatus: (state, action) => {
      state.fetchStatus = action.payload;
    },
    fetchJobDetails: (state) => {
      state.fetchStatus = 'successful';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveJobDetails.fulfilled, (state, action) => {
      state.jobDetails = action.payload;
    });
  },
});


const persistConfig = {
  key: 'jobDetails',
  storage,
};

const persistedReducer = persistReducer(persistConfig, jobDetailsSlice.reducer);

export const { setFetchStatus, fetchJobDetails } = jobDetailsSlice.actions;
export default persistedReducer;
