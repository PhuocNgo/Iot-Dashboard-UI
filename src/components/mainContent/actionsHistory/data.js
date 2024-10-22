const fetchData = async (
  page,
  pageSize,
  sortField = "time",
  sortDirection = "asc"
) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/results/action_histories?page=${page}&page_size=${pageSize}&sort_field=${sortField}&sort_direction=${sortDirection}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      console.log("Error, can not connect!");
      return { data: [], totalCount: 0 };
    }

    const result = await response.json();

    return result;
  } catch (err) {
    console.log("Cannot get the history:", err.message);
    return { data: [], totalCount: 0 };
  }
};

export default fetchData;
