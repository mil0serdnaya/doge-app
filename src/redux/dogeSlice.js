import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDogsAsync = createAsyncThunk(
  'dogeApp/getDogsAsync',
  async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    if (response.ok) {
      const allBreeds = await response.json();
      return { allBreeds }
    }
  }
);

export const dogeSlice = createSlice({
  name: 'dogeApp',
  initialState: {},
  reducers: {
    allBreeds: []
  },
  extraReducers: {
    [getDogsAsync.fulfilled]: (state, action) => {
      state.allBreeds = action.payload.allBreeds.message;
    }
  }
});

export const { getDogs } = dogeSlice.actions;
export default dogeSlice.reducer;