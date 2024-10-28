// src/slices/sensorsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const sensorsSlice = createSlice({
  name: "sensors",
  initialState: {
    sensorsValues: [],
  },
  reducers: {
    setSensorsData: (state, action) => {
      state.sensorsValues = action.payload;
    },
  },
});

export const { setSensorsData } = sensorsSlice.actions;
export default sensorsSlice.reducer;
