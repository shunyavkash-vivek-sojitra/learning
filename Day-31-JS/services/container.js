// buttons
let btnClear = document.querySelector("#btn-clear");
let btnAdd = document.querySelector("#btn-add");
let btnSub = document.querySelector("#btn-sub");

// container
let contentBox = document.querySelector(".content-box");

// item
let itemLi = document.querySelector("#item");

let itemList = [];
console.log("Array: ", itemList);

let notFound;

// no item found
const noItemFound = () => {
  if (!notFound) {
    notFound = document.createElement("h2");
    notFound.style.fontSize = "16px";
    notFound.style.color = "#faf0ca";
    notFound.style.textAlign = "center";
    notFound.textContent = "No Items Found.";
    contentBox.appendChild(notFound);
  }

  if (itemList.length === 0) {
    notFound.style.display = "block";
  } else {
    notFound.style.display = "none";
  }
};

// clear contentBox
const clearContentBox = () => {
  contentBox.innerHTML = "";
  itemList = [];
  contentBox.appendChild(notFound);
  noItemFound();
};

// add item
const addItem = () => {
  let itemText = "item";

  const li = document.createElement("li");
  li.setAttribute("class", "item");
  li.setAttribute("id", "item");
  li.innerHTML = `${itemText} ${itemList.length + 1}`;
  itemList.push(contentBox.appendChild(li));
  console.log("before: ", itemList);

  noItemFound();
};

// remove item
const removeItem = () => {
  if (itemList == 0) {
    return;
  }
  if (itemList.length > 0) {
    const removed = itemList.pop();
    contentBox.removeChild(removed);
  }
  noItemFound();
};

// calling btnClear
btnClear.addEventListener("click", () => {
  clearContentBox();
});
// calling btnAdd
btnAdd.addEventListener("click", () => {
  addItem();
});
// calling btnSub
btnSub.addEventListener("click", () => {
  removeItem();
});

// global calling
noItemFound();
