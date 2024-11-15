import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newDevices: {
    new_led1: false,
    new_led2: false,
    new_led3: false,
  },
};

const deviceSlice = createSlice({
  name: "newDevices",
  initialState,
  reducers: {
    setNewDeviceState: (state, action) => {
      const { deviceName, isOn } = action.payload;
      state.newDevices[deviceName] = isOn;
    },
  },
});

export const { setNewDeviceState } = deviceSlice.actions;
export default deviceSlice.reducer;
