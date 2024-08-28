import { Card, CardContent, Grid, Typography } from "@mui/material";
import { deviceSpecifications, length } from "./dataForDevices";
import { Box } from "@mui/system";

function Specifications() {
  return (
    <Grid container spacing={2}>
      {deviceSpecifications.map((curVal, index) => (
        <Grid item xs={12 / length} key={index}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: `${curVal.backgroundColor}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h4" color="text.secondary">
                  {curVal.name.substring(0, 1).toUpperCase() +
                    curVal.name.substring(1)}
                  :
                </Typography>
                <Typography variant="h3" component="div">
                  {curVal.data} {curVal.unit}
                </Typography>
              </CardContent>
            </Box>
            <Box>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                {curVal.icon}
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Specifications;
