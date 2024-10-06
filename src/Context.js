import React, { createContext, useContext, useState } from "react";

const DeviceContext = createContext();

export const useDeviceContext = () => {
  return useContext(DeviceContext);
};

export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState({});

  const updateDevice = (deviceName, isOn) => {
    setDevices((prevDevices) => ({
      ...prevDevices,
      [deviceName]: isOn,
    }));
  };

  return (
    <DeviceContext.Provider value={{ devices, updateDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};
