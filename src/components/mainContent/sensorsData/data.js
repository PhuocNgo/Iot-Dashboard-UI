const fetchSensorsData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/getSensorsDataDB");

    if (!response.ok) {
      console.log("Connect to internet failed:", response.statusText);
      return [];
    }

    const data = await response.json();

    return data.data;
  } catch (err) {
    console.log("Cannot fetch data:", err.message);
    return [];
  }
};

const dataForSensors = await fetchSensorsData();

export default dataForSensors;
