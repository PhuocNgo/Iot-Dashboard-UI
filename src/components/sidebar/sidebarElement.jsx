// import { Link } from "react-router-dom";
import { sideBarElementInfor } from "./sidebarElementInfor";
import { Link, ListItem, ListItemButton } from "@mui/material";
import { Link as LinkRouter, Outlet } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./sidebar.module.css";
const cx = classNames.bind(styles);

function SidebarElements() {
  const [itemSelected, setItemSelected] = useState(-1);

  const handleSelected = (index) => {
    setItemSelected(index);
  };

  return sideBarElementInfor.map((curEl, index) => (
    <ListItem
      className={cx({ selected: index === itemSelected })}
      key={index}
      disablePadding={true}
    >
      <LinkRouter
        to={`${curEl.path}`}
        style={{ textDecoration: "none", flexGrow: 1 }}
      >
        <ListItemButton onClick={() => handleSelected(index)}>
          <Link underline="none">{curEl.name}</Link>
        </ListItemButton>
      </LinkRouter>
    </ListItem>
  ));
}

export default SidebarElements;
