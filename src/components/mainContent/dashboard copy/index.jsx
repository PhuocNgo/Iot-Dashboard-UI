import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import DeviceControl from "./devices/deviceControl";

function NewDashboard() {
  return (
    <Container>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>Dashboard</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DeviceControl />
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewDashboard;
