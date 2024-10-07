import * as React from "react";
import Typography from "@mui/material/Typography";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LineHighlightPlot, LinePlot } from "@mui/x-charts/LineChart";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";
import { ChartsAxisHighlight } from "@mui/x-charts/ChartsAxisHighlight";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import realWeatherData from "./dataForChart"; // Nhập dữ liệu từ dataForChart.js

const series = [
  {
    type: "line",
    yAxisId: "temperature",
    color: "red",
    label: "Temperature (°C)",
    data: realWeatherData.map((data) => data.temperature),
  },
  {
    type: "line",
    yAxisId: "humidity",
    color: "blue",
    label: "Humidity (%)",
    data: realWeatherData.map((data) => data.humidity),
  },
];

export default function WeatherChart() {
  return (
    <div style={{ width: "100%", marginTop: "16px" }}>
      <Typography sx={{ fontSize: "16px", marginBottom: "16px" }}>
        Sensors Data
      </Typography>
      <div>
        <ResponsiveChartContainer
          series={series}
          height={400}
          margin={{ top: 10 }}
          xAxis={[
            {
              id: "time",
              data: realWeatherData.map((data) => new Date(data.time)),
              scaleType: "band",
              valueFormatter: (value) => value.toLocaleDateString(),
            },
          ]}
          yAxis={[
            {
              id: "temperature",
              scaleType: "linear",
            },
            {
              id: "humidity",
              scaleType: "linear",
            },
          ]}
        >
          <ChartsAxisHighlight x="line" />
          <LinePlot />
          <LineHighlightPlot />
          <ChartsXAxis
            label="Time"
            position="bottom"
            axisId="time"
            tickInterval={(value, index) => {
              return index % 30 === 0;
            }}
            tickLabelStyle={{
              fontSize: 10,
            }}
          />
          <ChartsYAxis
            label="Temperature (°C)"
            position="left"
            axisId="temperature"
            tickLabelStyle={{ fontSize: 10 }}
          />
          <ChartsYAxis
            label="Humidity (%)"
            position="right"
            axisId="humidity"
            tickLabelStyle={{ fontSize: 10 }}
          />
          <ChartsTooltip />
        </ResponsiveChartContainer>
      </div>
    </div>
  );
}
