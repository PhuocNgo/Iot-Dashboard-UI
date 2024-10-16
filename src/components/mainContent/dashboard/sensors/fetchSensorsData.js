const fetchSensorsData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/sensor-data");

    if (!response.ok) {
      console.log("Network err:", response.statusText);
      return {};
    }

    const data = await response.json();
    console.log("data fetch:", data);
    return data.data;
  } catch (err) {
    console.log("Cannot get sensors data:", err.message);
    return {};
  }
};

export default fetchSensorsData;
