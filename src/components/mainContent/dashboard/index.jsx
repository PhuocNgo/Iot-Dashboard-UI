import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Specifications from "./sensors/specifications";
import Chart from "./chart/chart";
import DeviceControl from "./devices/deviceControl";

function Dashboard() {
  return (
    <Container>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>Dashboard</Typography>
      <Specifications />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Chart />
        </Grid>
        <Grid item xs={4}>
          <DeviceControl />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
