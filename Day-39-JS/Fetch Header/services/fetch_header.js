const source = "https://jsonplaceholder.typicode.com/todos";

const fetchedData = fetch(source, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ data: "Hello..." }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log(fetchedData);
