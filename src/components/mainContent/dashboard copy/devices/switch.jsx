import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { setNewDeviceState } from "../../../../slices/newDevicesSlice";

const toggleDevice = async (state, deviceName) => {
  const message = state ? "on" : "off";

  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/device-status-shift?topic_sub=${deviceName}_sub&topic_pub=${deviceName}_pub`,
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
    return data.message;
  } catch (error) {
    console.error("Error:", error.message);
    return error.message;
  }
};

const handleChange = async (event, deviceName, dispatch) => {
  const newState = event.target.checked;
  const actionMsg = await toggleDevice(newState, deviceName);

  if (actionMsg === "on" || actionMsg === "off") {
    dispatch(setNewDeviceState({ deviceName, isOn: newState }));

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

export const DeviceSwitch = ({ deviceName }) => {
  const dispatch = useDispatch();
  const isOn = useSelector((state) => state.newDevices.newDevices[deviceName]);

  return (
    <Switch
      checked={isOn}
      onChange={(event) => {
        handleChange(event, deviceName, dispatch);
      }}
      color="primary"
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
