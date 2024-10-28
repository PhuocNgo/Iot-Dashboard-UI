import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devices: {
    light: false,
    fan: false,
    airConditioner: false,
  },
};

const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDeviceState: (state, action) => {
      const { deviceName, isOn } = action.payload;
      state.devices[deviceName] = isOn;
    },
  },
});

export const { setDeviceState } = deviceSlice.actions;
export default deviceSlice.reducer;
