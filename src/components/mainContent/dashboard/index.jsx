import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Specifications from "./specifications";
import BasicLineChart from "./chart";
import Test from "./test";
import WeatherChart from "./chart1";

function Dashboard() {
  return (
    <Container>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>Dashboard</Typography>
      <Specifications />
      {/* <BasicLineChart /> */}
      <WeatherChart />
      {/* <Test /> */}
    </Container>
  );
}

export default Dashboard;
