import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBreeds = createAsyncThunk(
  'dogeApp/fetchBreeds',
  async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list');
    const breedsJson = await response.json();
    const breedsList = breedsJson.message;

    breedsList.forEach(breed => {
      let breedData = {
        name: breed,
        img: null
      }
    });

    // return breedsList;
  }
);

export const dogeSlice = createSlice({
  name: 'dogeApp',
  initialState: {
    breeds: [],
  },
  reducers: {
  },
  extraReducers: {
    [fetchBreeds.fulfilled]: (state, action) => {
      state.breeds.push(action.payload);
    }
  }
});

export default dogeSlice.reducer;