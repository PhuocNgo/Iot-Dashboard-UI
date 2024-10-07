const saveData = async () => {
  try {
    const time = new Date();
    const data = {
      ...JSON.parse(localStorage.getItem("dataSensors")),
      time,
    };
    const response = await fetch("http://localhost:8080/api/saveDataSensors", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

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
