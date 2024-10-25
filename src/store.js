// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./slices/chartSlice";

const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});

export default store;
