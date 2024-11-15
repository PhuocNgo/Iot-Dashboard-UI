import { createSlice } from "@reduxjs/toolkit";

const sensorsSlice = createSlice({
  name: "windSensorsData",
  initialState: {
    sensorsValues: [], // Khởi tạo state cho sensorsValues
  },
  reducers: {
    setWindSensorsData(state, action) {
      state.sensorsValues = action.payload;
    },
  },
});

// Xuất action
export const { setWindSensorsData } = sensorsSlice.actions;

// Selector để lấy dữ liệu wind từ Redux
export const selectWindData = (state) => state.windSensorsData.sensorsValues;

// Xuất reducer
export default sensorsSlice.reducer;
