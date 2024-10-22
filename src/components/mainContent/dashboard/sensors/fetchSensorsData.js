const fetchSensorsData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/sensor-data");

    if (!response.ok) {
      console.log("Network err:", response.statusText);
      return {};
    }

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log("Cannot get sensors data:", err.message);
    return {};
  }
};

export default fetchSensorsData;
