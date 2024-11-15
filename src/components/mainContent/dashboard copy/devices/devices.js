// devices.js
import { DeviceSwitch } from "./switch";
import styles from "./devices.module.css";

export const deviceInfo = [
  {
    name: "new_led1",
    icon: (isOn) => (
      <i
        className="fa-regular fa-lightbulb"
        style={{ fontSize: "50px", color: isOn ? "red" : "black" }}
      ></i>
    ),
    switchBtn: <DeviceSwitch deviceName={"new_led1"} />,
  },
  {
    name: "new_led2",
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
    switchBtn: <DeviceSwitch deviceName={"new_led2"} />,
  },
  {
    name: "new_led3",
    icon: (isOn) => (
      <i
        className={`fa-solid fa-wind ${isOn ? styles["air-conditioner"] : ""}`}
        style={{ fontSize: "50px", color: isOn ? "transparent" : "black" }}
      ></i>
    ),
    switchBtn: <DeviceSwitch deviceName={"new_led3"} />,
  },
];
