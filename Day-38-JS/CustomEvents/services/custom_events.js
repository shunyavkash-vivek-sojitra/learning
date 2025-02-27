const contentBox = document.querySelector("#contentBox");

const loadData = new CustomEvent("fetchData", {
  detail: { message: "Data has been loaded successfully." },
});

document.addEventListener("fetchData", (event) => {
  console.log(event.detail.message);
});
console.log("Wait for a while...");
setTimeout(() => {
  document.dispatchEvent(loadData);
}, 2000);
