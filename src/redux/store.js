import { configureStore } from "@reduxjs/toolkit";
import dogeReducer from './dogeSlice';

export default configureStore({
  reducer: {
    dogeApp: dogeReducer,
  },
});