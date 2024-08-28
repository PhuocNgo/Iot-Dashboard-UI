import { Grid } from "@mui/material";
import { Suspense } from "react";

import Header from "./components/header";
import SideBar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ width: "100%" }}>
          {/* Header */}
          <Grid
            container
            sx={{ position: "fixed", zIndex: 9999, width: "100%" }}
          >
            <Header />
          </Grid>

          <Grid container>
            {/* side bar */}
            <Grid
              item
              xs={1.5}
              sx={{ position: "fixed", zIndex: 9, flexGrow: 1 }}
            >
              <SideBar />
            </Grid>

            {/* main content */}
            <Grid
              item
              xs={10.5}
              sx={{
                mt: "80px",
                position: "relative",
                left: "138px",
                flexGrow: 1,
              }}
            >
              <Container>
                <Outlet />
              </Container>
            </Grid>
          </Grid>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
