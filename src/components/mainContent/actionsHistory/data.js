const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/getActionsHistory");

    if (!response.ok) {
      console.log("Error, can not connect!");
      return [];
    }

    const result = await response.json();
    const history = result.data;
    return history;
  } catch (err) {
    console.log("Cannot get the history:", err.message);
    return [];
  }
};

export const histories = await fetchData();
