export default function handleOnKeyDown(event, data, setData) {
  let dataAfterFilter = [];

  if (event.key === "Enter") {
    const id = parseInt(event.target.value);

    dataAfterFilter = data.filter((curVal) => {return curVal.id === id})

    setData(dataAfterFilter)
  }
}