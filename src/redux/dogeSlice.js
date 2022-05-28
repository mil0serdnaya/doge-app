import { createSlice } from "@reduxjs/toolkit";

export const dogeSlice = createSlice({
  name: 'dogeApp',
  initialState: [],
  reducers: {
    getDogs: (state, action) => {
      console.log(666)
    },
  },
});

export const { getDogs } = dogeSlice.actions;
export default dogeSlice.reducer;