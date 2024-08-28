import {
  DeviceThermostatOutlined,
  LightModeOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";

export const deviceSpecifications = [
  {
    name: "humidity",
    data: 30,
    icon: <WaterDropOutlined sx={{ fontSize: "40px" }} />,
    unit: "%",
    backgroundColor: "#78d2f5",
  },
  {
    name: "light",
    data: 500,
    icon: <LightModeOutlined sx={{ fontSize: "40px" }} />,
    unit: "lux",
    backgroundColor: "#f2ef11",
  },
  {
    name: "temperature",
    data: 37,
    icon: <DeviceThermostatOutlined sx={{ fontSize: "40px" }} />,
    unit: "°C",
    backgroundColor: "#f27935",
  },
];

export const length = deviceSpecifications.length;
