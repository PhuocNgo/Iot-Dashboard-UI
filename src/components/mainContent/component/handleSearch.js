export default async function handleSearch(query, apiEndpoint, setData, name) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/search/${apiEndpoint}?${name}=${query}`
    );

    if (!response.ok) {
      console.log("Can not connect to internet:", response.statusText);
      setData([]);
    }

    const device = await response.json();
    const data = device.data;
    setData(data);
  } catch (err) {
    console.log("can not get the data:", err.message);
    setData([]);
  }
}
