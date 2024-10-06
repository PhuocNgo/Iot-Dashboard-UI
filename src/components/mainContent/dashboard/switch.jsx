import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";

const toggleDevice = async (state, apiEndPoint, setIsOn, deviceName) => {
  const message = state ? "on" : "off";

  try {
    const response = await fetch(`http://localhost:8080/api/${apiEndPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.message === "on" || data.message === "off") {
      setIsOn(state);
      localStorage.setItem(deviceName, String(state));
    }

    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const handleChange = async (event, apiEndPoint, setIsOn, deviceName) => {
  const newState = event.target.checked;
  toggleDevice(newState, apiEndPoint, setIsOn, deviceName);
};

export const DeviceSwitch = ({ apiEndPoint, deviceName }) => {
  const [isOn, setIsOn] = useState(false);

  if (!localStorage.getItem(deviceName)) {
    localStorage.setItem(deviceName, String(isOn));
  }
  console.log(localStorage.getItem(deviceName));

  useEffect(() => {
    const status = localStorage.getItem(deviceName) === "true" ? true : false;
    toggleDevice(status, apiEndPoint, setIsOn, deviceName);
  }, []);

  return (
    <Switch
      checked={isOn}
      onChange={(event) => {
        handleChange(event, apiEndPoint, setIsOn, deviceName);
      }}
      color="primary"
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
