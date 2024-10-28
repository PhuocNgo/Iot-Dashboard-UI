import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSensorsData from "./fetchSensorsData";
import saveData from "./saveSensorsData";
import { setSensorsData } from "../../../../slices/sensorsSlice";
import { sensorsData, length } from "./sensorsData"; // Dữ liệu mặc định
import {
  DeviceThermostatOutlined,
  LightModeOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";

// Object chứa biểu tượng cho các cảm biến
const sensorIcons = {
  temperature: <DeviceThermostatOutlined sx={{ fontSize: "40px" }} />,
  humidity: <WaterDropOutlined sx={{ fontSize: "40px" }} />,
  brightness: <LightModeOutlined sx={{ fontSize: "40px" }} />,
};

function Specifications() {
  const dispatch = useDispatch();
  const sensorsValues = useSelector((state) => state.sensors.sensorsValues);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSensorsData();

      // Chuyển đổi dữ liệu từ API sang định dạng mong muốn
      const transformedData = [
        {
          name: "temperature",
          data: result.temperature,
          unit: "°C",
          backgroundColor: "#f27935",
        },
        {
          name: "humidity",
          data: result.humidity,
          unit: "%",
          backgroundColor: "#78d2f5",
        },
        {
          name: "brightness",
          data: result.brightness,
          unit: "lux",
          backgroundColor: "#f2ef11",
        },
      ];

      dispatch(setSensorsData(transformedData));
    };

    fetchData();
    const idFetch = setInterval(fetchData, 2000);
    const idSave = setInterval(saveData, 5 * 60 * 1000);

    return () => {
      clearInterval(idFetch);
      clearInterval(idSave);
    };
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {(sensorsValues.length > 0 ? sensorsValues : sensorsData).map(
        (curVal, index) => (
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
                  <Typography
                    component="div"
                    variant="h4"
                    color="text.secondary"
                  >
                    {curVal.name.charAt(0).toUpperCase() + curVal.name.slice(1)}
                    :
                  </Typography>
                  <Typography variant="h3" component="div">
                    {curVal.data} {curVal.unit}
                  </Typography>
                </CardContent>
              </Box>
              <Box>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  {sensorIcons[curVal.name]}{" "}
                  {/* Sử dụng biểu tượng từ object */}
                </CardContent>
              </Box>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
}

export default Specifications;
