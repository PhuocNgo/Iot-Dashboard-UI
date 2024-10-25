import { Card, CardContent, Grid, Typography } from "@mui/material";
import { sensorsData, length } from "./sensorsData";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import fetchSensorsData from "./fetchSensorsData";
import saveData from "./saveSensorsData";

function Specifications() {
  const [sensorsValues, setSensorsValues] = useState(sensorsData);

  useEffect(() => {
    setSensorsValues((prevValues) => {
      const data = JSON.parse(localStorage.getItem("dataSensors"));
      return prevValues.map((sensor) => ({
        ...sensor,
        data: data[sensor.name],
      }));
    });

    const fetchData = async () => {
      const result = await fetchSensorsData();
      const data = result;
      setSensorsValues((prevValues) => {
        localStorage.setItem("dataSensors", JSON.stringify(data));
        return prevValues.map((sensor) => ({
          ...sensor,
          data: data[sensor.name],
        }));
      });
    };
    fetchData();
    const idFetch = setInterval(fetchData, 2000);
    const idSave = setInterval(saveData, 5 * 60 * 1000);

    return () => {
      clearInterval(idFetch);
      clearInterval(idSave);
    };
  }, []);

  return (
    <Grid container spacing={2}>
      {sensorsValues.map((curVal, index) => (
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
