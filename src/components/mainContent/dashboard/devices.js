import LightIcon from "@mui/icons-material/Light";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AirIcon from "@mui/icons-material/Air";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Size switch demo" } };

export const deviceInfo = [
  {
    name: "light",
    icon: <LightIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <Switch {...label} defaultChecked />,
  },
  {
    name: "fan",
    icon: <WindPowerIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <Switch {...label} defaultChecked />,
  },
  {
    name: "air condition",
    icon: <AirIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <Switch {...label} defaultChecked />,
  },
];

export const lenghtOfDevicesInfo = deviceInfo.length;
