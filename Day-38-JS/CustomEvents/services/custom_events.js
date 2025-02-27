const contentBox = document.querySelector("#contentBox");
const content = document.querySelector("#contentInput");

const addContent = (event) => {
  event.preventDefault();

  const loadData = new CustomEvent("fetchData", {
    detail: { message: content.value },
  });

  document.addEventListener("fetchData", (event) => {
    console.log(event.detail.message);
  });

  setTimeout(() => {
    document.dispatchEvent(loadData);

    if (content.value) {
      contentBox.textContent = content.value;
    }
  }, 1500);
};

if (!content.value) {
  contentBox.textContent = "Write Something...";
}
