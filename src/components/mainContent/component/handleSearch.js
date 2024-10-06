export default async function handleSearch(query, apiEndpoint, setData) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/search/${apiEndpoint}?device_name=${query}`
    );

    if (!response.ok) {
      console.log("Can not connect to internet!");
      setData([]);
    }

    const device = await response.json();
    setData(device.data);
  } catch (err) {
    console.log("can not get the data:", err.message);
    setData([]);
  }
}
