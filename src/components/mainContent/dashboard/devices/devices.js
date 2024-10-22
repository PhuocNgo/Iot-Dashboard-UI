import LightIcon from "@mui/icons-material/Light";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AirIcon from "@mui/icons-material/Air";
import { DeviceSwitch } from "./switch";

export const deviceInfo = [
  {
    name: "light",
    icon: <LightIcon sx={{ fontSize: "50px" }} />,
    switchBtn: (
      <DeviceSwitch
        deviceName={"light"}
        topicSub={"light_sub"}
        topicPub={"light_pub"}
      />
    ),
  },
  {
    name: "fan",
    icon: <WindPowerIcon sx={{ fontSize: "50px" }} />,
    switchBtn: (
      <DeviceSwitch
        deviceName={"fan"}
        topicSub={"fan_sub"}
        topicPub={"fan_pub"}
      />
    ),
  },
  {
    name: "air condition",
    icon: <AirIcon sx={{ fontSize: "50px" }} />,
    switchBtn: (
      <DeviceSwitch
        deviceName={"air conditioner"}
        topicSub={"air_conditioner_sub"}
        topicPub={"air_conditioner_pub"}
      />
    ),
  },
];

export const lenghtOfDevicesInfo = deviceInfo.length;
