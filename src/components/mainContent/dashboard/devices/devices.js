import LightIcon from "@mui/icons-material/Light";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AirIcon from "@mui/icons-material/Air";
import { DeviceSwitch } from "./switch";

export const deviceInfo = [
  {
    name: "light",
    icon: <LightIcon sx={{ fontSize: "50px" }} />,
    switchBtn: (
      <DeviceSwitch apiEndPoint={"changeTheLight"} deviceName={"light"} />
    ),
  },
  {
    name: "fan",
    icon: <WindPowerIcon sx={{ fontSize: "50px" }} />,
    switchBtn: <DeviceSwitch apiEndPoint={"changeTheFan"} deviceName={"fan"} />,
  },
  {
    name: "air condition",
    icon: <AirIcon sx={{ fontSize: "50px" }} />,
    switchBtn: (
      <DeviceSwitch
        apiEndPoint={"changeTheAirConditioner"}
        deviceName={"air conditioner"}
      />
    ),
  },
];

export const lenghtOfDevicesInfo = deviceInfo.length;
