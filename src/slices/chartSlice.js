// src/slices/chartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      const newData = [...state.data, action.payload];
      if (newData.length > 20) newData.shift(); // Giữ số lượng điểm dữ liệu tối đa
      state.data = newData;
    },
  },
});

export const { addData } = chartSlice.actions;
export const selectChartData = (state) => state.chart.data;

export default chartSlice.reducer;
