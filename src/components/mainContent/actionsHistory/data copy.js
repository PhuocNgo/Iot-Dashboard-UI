fetch("http://localhost:8080/api/getSensorsData")
  .then((res) => res.json())
  .then((json) => console.log(json.message));
