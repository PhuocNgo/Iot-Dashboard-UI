// devices.js
import { DeviceSwitch } from "./switch";
import styles from "./devices.module.css";

export const deviceInfo = [
  {
    name: "light",
    icon: (isOn) => (
      <i
        className="fa-regular fa-lightbulb"
        style={{ fontSize: "50px", color: isOn ? "red" : "black" }}
      ></i>
    ),
    switchBtn: <DeviceSwitch deviceName={"light"} />,
  },
  {
    name: "fan",
    icon: (isOn) => (
      <i
        className={`fa-solid fa-fan ${
          isOn ? styles.spin : styles["fan-transition"]
        }`}
        style={{
          fontSize: "50px",
          color: isOn ? "greenyellow" : "black",
          transition: "color 1s ease",
        }}
      ></i>
    ),
    switchBtn: <DeviceSwitch deviceName={"fan"} />,
  },
  {
    name: "air conditioner",
    icon: (isOn) => (
      <i
        className={`fa-solid fa-wind ${isOn ? styles["air-conditioner"] : ""}`}
        style={{ fontSize: "50px", color: isOn ? "transparent" : "black" }}
      ></i>
    ),
    switchBtn: <DeviceSwitch deviceName={"air_conditioner"} />,
  },
];
