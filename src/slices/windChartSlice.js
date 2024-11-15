import { createSlice } from "@reduxjs/toolkit";

const windChartSlice = createSlice({
  name: "windChart",
  initialState: {
    windData: [], // Khởi tạo state cho windData
  },
  reducers: {
    addWindData(state, action) {
      const newData = [...state.windData, action.payload];
      if (newData.length > 20) newData.shift();
      state.windData = newData;
    },
    // Các reducer khác nếu có
  },
});

export const { addWindData } = windChartSlice.actions;

export const selectWindChartData = (state) => state.windChart.windData;

export default windChartSlice.reducer;
