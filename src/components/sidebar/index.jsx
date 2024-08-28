import { Divider, List } from "@mui/material";
import SidebarElements from "./sidebarElement";
import classNames from "classnames/bind";

import styles from "./sidebar.module.css";
const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx("wrapper")}>
      <List
        sx={{
          paddingTop: 0,
          width: "100%",
        }}
      >
        <SidebarElements />
      </List>

      <Divider orientation="vertical" flexItem />
    </div>
  );
}

export default SideBar;
