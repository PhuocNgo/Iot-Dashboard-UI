import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }} fontSize={"16px"}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: 16,
              display: { xs: "none", sm: "block" },
            }}
          >
            Dashboard IOT
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
