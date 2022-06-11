import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBreedsList = createAsyncThunk(
  'dogeApp/fetchBreedsList',
  async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list');
    const breedsJson = await response.json();
    const breedsList = breedsJson.message;

    return breedsList;
  }
);

export const dogeSlice = createSlice({
  name: 'dogeApp',
  initialState: {
    breedsList: [],
  },
  reducers: {
  },
  extraReducers: {
    [fetchBreedsList.fulfilled]: (state, action) => {
      state.breedsList.push(action.payload);
    }
  }
});

export default dogeSlice.reducer;