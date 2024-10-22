fetch(
  `http://localhost:8080/api/v1/results/action_histories?page=${1}&page_size=${4}&sort_field=${"time"}&sort_direction=${"asc"}`,
  {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: {},
  }
).then((data) => {
  console.log(data.json());
});
