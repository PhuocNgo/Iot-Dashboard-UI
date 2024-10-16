const fetchData = async (page, pageSize) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/getActionsHistory?page=${page}&page_size=${pageSize}`
    );

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

export default fetchData;
