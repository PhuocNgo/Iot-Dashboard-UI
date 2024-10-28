// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./slices/chartSlice";
import sensorsReducer from "./slices/sensorsSlice";
import deviceReducer from "./slices/devicesSlice";

const store = configureStore({
  reducer: {
    chart: chartReducer,
    sensors: sensorsReducer,
    devices: deviceReducer,
  },
});

export default store;
