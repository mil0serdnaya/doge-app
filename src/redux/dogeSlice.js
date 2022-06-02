import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBreedsListAsync = createAsyncThunk(
  'dogeApp/getBreedsListAsync',
  async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list')
    if (response.ok) {
      const breedsList = await response.json();
      return { breedsList }
    }
  }
);

export const dogeSlice = createSlice({
  name: 'dogeApp',
  initialState: {},
  reducers: {
    breedsList: []
  },
  extraReducers: {
    [getBreedsListAsync.fulfilled]: (state, action) => {
      state.breedsList = action.payload.breedsList.message;
    }
  }
});

export const { getDogs } = dogeSlice.actions;
export default dogeSlice.reducer;