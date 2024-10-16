import LightIcon from "@mui/icons-material/Light";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AirIcon from "@mui/icons-material/Air";
import { DeviceSwitch } from "./switch";

export const deviceInfo = [
  {
    name: "light",
    icon: <LightIcon sx={{ fontSize: "50px" }} />,
    switchBtn: (
      <DeviceSwitch apiEndPoint={"light-shift"} deviceName={"light"} />
    ),
  },
  {
    name: "fan",
    icon: <WindPowerIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <DeviceSwitch apiEndPoint={"fan-shift"} deviceName={"fan"} />,
  },
  {
    name: "air condition",
    icon: <AirIcon sx={{ fontSize: "50px" }} />,
    switchBtn: (
      <DeviceSwitch
        apiEndPoint={"air-conditioner-shift"}
        deviceName={"air conditioner"}
      />
    ),
  },
];

export const lenghtOfDevicesInfo = deviceInfo.length;
