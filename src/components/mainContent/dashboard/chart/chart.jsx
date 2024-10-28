import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addData, selectChartData } from "../../../../slices/chartSlice";

const Chart = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectChartData); // Lấy dữ liệu từ Redux

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/sensor-data"
      );
      const { temperature, humidity, brightness } = response.data.data;
      const parsedTime = new Date().toLocaleTimeString();

      // Dispatch action để thêm dữ liệu vào Redux
      dispatch(
        addData({
          time: parsedTime,
          temperature,
          humidity,
          brightness,
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Lần đầu tiên gọi fetchData
    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sensor Data Chart
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
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
