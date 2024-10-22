const saveData = async () => {
  try {
    const time = new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
    ).toISOString();

    const data = {
      ...JSON.parse(localStorage.getItem("dataSensors")),
      time,
    };
    const response = await fetch(
      "http://localhost:8080/api/v1/data/sensor_datas",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );

    if (!response.ok) {
      console.log("Network err:", response.statusText);
    } else {
      console.log("save successfully:", await response.json());
    }
  } catch (err) {
    console.log("Cannot save data:", err.message);
  }
};

export default saveData;
