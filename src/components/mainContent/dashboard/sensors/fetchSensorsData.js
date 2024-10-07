const fetchSensorsData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/getSensorsData");

    if (!response.ok) {
      console.log("Network err:", response.statusText);
      return {};
    }

    const data = await response.json();
    return data.message;
  } catch (err) {
    console.log("Cannot get sensors data:", err.message);
    return {};
  }
};

export default fetchSensorsData;
