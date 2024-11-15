// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./slices/chartSlice";
import windChartReducer from "./slices/windChartSlice";
import sensorsReducer from "./slices/sensorsSlice";
import deviceReducer from "./slices/devicesSlice";
import newDeviceReducer from "./slices/newDevicesSlice";
import windSensorsDataReducer from "./slices/windSensorsData";

const store = configureStore({
  reducer: {
    chart: chartReducer,
    sensors: sensorsReducer,
    devices: deviceReducer,
    windChart: windChartReducer,
    windSensorsData: windSensorsDataReducer,
    newDevices: newDeviceReducer,
  },
});

export default store;
