import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";

const toggleDevice = async (state, setIsOn, deviceName, topicSub, topicPub) => {
  const message = state ? "on" : "off";

  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/device-status-shift?topic_sub=${topicSub}&topic_pub=${topicPub}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

    if (!response.ok) {
      console.log(new Error("Network response was not ok"));
      return "Network response was not ok";
    }

    const data = await response.json();

    if (data.message === "on" || data.message === "off") {
      setIsOn(state);
      localStorage.setItem(deviceName, String(state));
      return data.message;
    }

    return data.message;
  } catch (error) {
    console.error("Error:", error.message);
    return error.message;
  }
};

const handleChange = async (event, setIsOn, deviceName, topicSub, topicPub) => {
  const newState = event.target.checked;
  const actionMsg = await toggleDevice(
    newState,
    setIsOn,
    deviceName,
    topicSub,
    topicPub
  );
  console.log("action message::", actionMsg);
  if (actionMsg === "on" || actionMsg === "off") {
    fetch("http://localhost:8080/api/v1/data/action_histories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          device_name: deviceName,
          action: actionMsg,
          time: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ).toISOString(),
        },
      }),
    });
  }
};

export const DeviceSwitch = ({ topicSub, topicPub, deviceName }) => {
  const [isOn, setIsOn] = useState(false);

  if (!localStorage.getItem(deviceName)) {
    localStorage.setItem(deviceName, String(isOn));
  }
  console.log(localStorage.getItem(deviceName));

  useEffect(() => {
    const status = localStorage.getItem(deviceName) === "true" ? true : false;
    toggleDevice(status, setIsOn, deviceName, topicSub, topicPub);
  }, []);

  return (
    <Switch
      checked={isOn}
      onChange={(event) => {
        handleChange(event, setIsOn, deviceName, topicSub, topicPub);
      }}
      color="primary"
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
