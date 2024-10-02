import LightIcon from "@mui/icons-material/Light";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AirIcon from "@mui/icons-material/Air";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Size switch demo" } };

const handleTurnOnLight = async () => {
  try {
    await fetch("http://localhost:8080/changeTheLight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "on" }),
    });
  } catch (err) {
    console.log("Cannot send request:", err);
  }
};

export const deviceInfo = [
  {
    name: "light",
    icon: <LightIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <Switch {...label} onClick={handleTurnOnLight} />,
  },
  {
    name: "fan",
    icon: <WindPowerIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <Switch {...label} />,
  },
  {
    name: "air condition",
    icon: <AirIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <Switch {...label} />,
  },
];

export const lenghtOfDevicesInfo = deviceInfo.length;
