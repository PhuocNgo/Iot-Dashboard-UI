const fetchData = async (
  collectionName,
  page,
  pageSize,
  sortField,
  sortDirection,
  searchValue,
  speciType
) => {
  try {
    const query = {};

    if (searchValue) {
      query.search_value = searchValue;
    }

    if (speciType) {
      query.speci_type = speciType;
    }

    const response = await fetch(
      `http://localhost:8080/api/v1/results/${collectionName}?page=${page}&page_size=${pageSize}&sort_field=${sortField}&sort_direction=${sortDirection}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(query),
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
