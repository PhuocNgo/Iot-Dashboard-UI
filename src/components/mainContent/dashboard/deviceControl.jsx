import { Card, CardContent, Grid, Typography } from "@mui/material";
import { deviceInfo } from "./devices";
import { Box, Container } from "@mui/system";

function DeviceControl() {
  return (
    <Container sx={{ mt: "16px" }}>
      <Typography sx={{ fontSize: "16px", marginBottom: "16px" }}>
        Device Control
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "16px", flexDirection: "column" }}
      >
        {deviceInfo.map((curVal, index) => (
          <Grid item xs={12} key={index}>
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
                  <Typography
                    component="div"
                    variant="h4"
                    color="text.secondary"
                  >
                    {curVal.name.substring(0, 1).toUpperCase() +
                      curVal.name.substring(1)}
                    :
                  </Typography>
                  <Typography variant="h3" component="div">
                    {curVal.switchBtn}
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
    </Container>
  );
}

export default DeviceControl;
