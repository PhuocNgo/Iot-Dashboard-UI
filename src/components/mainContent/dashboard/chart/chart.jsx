import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container, Typography } from "@mui/material";

const MAX_DATA_POINTS = 20; // Số lượng điểm dữ liệu tối đa

const Chart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/sensor-data"
      );

      const { temperature, humidity, brightness } = response.data.data;

      const parsedTime = new Date().toLocaleTimeString();
      setData((prevData) => {
        const newData = [
          ...prevData,
          {
            time: parsedTime,
            temperature,
            humidity,
            brightness,
          },
        ];

        return newData.length > MAX_DATA_POINTS ? newData.slice(1) : newData;
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sensor Data Chart
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            domain={["dataMin", "dataMax"]}
            tickFormatter={(time) => {
              return time;
            }}
          />
          <YAxis yAxisId="left" orientation="left" stroke="#ff0000" />
          <YAxis yAxisId="right" orientation="right" stroke="#0000ff" />
          <Tooltip formatter={(value, name) => [value, name]} />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ff0000"
            yAxisId="left"
            name="Temperature"
          />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#00ff00"
            yAxisId="left"
            name="Humidity"
          />
          <Line
            type="monotone"
            dataKey="brightness"
            stroke="#0000ff"
            yAxisId="right"
            name="Brightness"
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
