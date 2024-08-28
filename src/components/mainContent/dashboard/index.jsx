import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Specifications from "./specifications";
import BasicLineChart from "./chart";

function Dashboard() {
  return (
    <Container>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>Dashboard</Typography>
      <Specifications />
      <BasicLineChart />
    </Container>
  );
}

export default Dashboard;
