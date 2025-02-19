// form
let productFormReset = document.querySelector("#productForm");
let productForm = document.querySelectorAll("#productForm");
let inputField = document.getElementsByTagName("input");
let tableBody = document.querySelector("#tbody");

// inputs
let name = document.querySelector("#name");
let price = document.querySelector("#price");
let category = document.querySelector("#category");
let rating = document.querySelector("#rating");

// add button
let btnAdd = document.querySelector(".btnAdd");

// search
let searchBox = document.querySelector("#searchBox");

// filter
let filterCategory = document.querySelector("#filterCategory");
let selectOption = document.querySelector("#selectOption");

// table
let dataTable = document.querySelector("#productTable");

// TH Sorting
// id
let reOrder = document.querySelector("#reorder");
// name
let nameUp = document.querySelector("#name-up");
let nameDown = document.querySelector("#name-down");
// price
let priceUp = document.querySelector("#price-up");
let priceDown = document.querySelector("#price-down");
// category
let categoryUp = document.querySelector("#category-up");
let categoryDown = document.querySelector("#category-down");
// rating
let ratingUp = document.querySelector("#rating-up");
let ratingDown = document.querySelector("#rating-down");

// setData
const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// getData
const getData = () => {
  return JSON.parse(localStorage.getItem("Product")) || [];
};

// Products
let products = getData();

// Default "All Categories" & Dynamic categories choice
const filterOptions = () => {
  const categories = [...new Set(products.map((product) => product.category))];
  filterCategory.innerHTML = ` <option value="All Categories">All Categories</option>
  ${categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("")}`;
};

filterOptions();

// =================================================== Create Product /
const createProduct = (e) => {
  e.preventDefault();

  // fields required
  if (
    !name.value.trim() ||
    !price.value.trim() ||
    !category.value.trim() ||
    !rating.value.trim()
  ) {
    alert("All fields are must be filled!");
    return;
  }

  // new data
  const newProduct = {
    // id: "id" + Math.random().toString(16).slice(2),
    id: products.length + 1,
    name: name.value.trim(),
    price: price.value.trim(),
    category: category.value.trim(),
    rating: rating.value.trim(),
  };

  products.push(newProduct);
  setData("Product", products);
  productFormReset.reset();

  filterOptions();
  displayProduct();
};

// =================================================== Display Product /
const displayProduct = (reqAction) => {
  // clear table before load data
  tableBody.innerHTML = "";

  // load data
  if (!reqAction == "") {
    reqAction.forEach((product) => {
      const tableRow = tableBody.insertRow();
      tableRow.insertCell(0).textContent = product.id;
      tableRow.insertCell(1).textContent = product.name;
      tableRow.insertCell(2).textContent = product.price;
      tableRow.insertCell(3).textContent = product.category;
      tableRow.insertCell(4).textContent = product.rating;
    });
  } else {
    products.forEach((product) => {
      const tableRow = tableBody.insertRow();
      tableRow.insertCell(0).textContent = product.id;
      tableRow.insertCell(1).textContent = product.name;
      tableRow.insertCell(2).textContent = product.price;
      tableRow.insertCell(3).textContent = product.category;
      tableRow.insertCell(4).textContent = product.rating;
    });
  }
};

displayProduct();

// =================================================== Sorting /
// id - reOrder
reOrder.addEventListener("click", () => {
  const idSorted = products.sort((a, b) => a.id - b.id);
  displayProduct(idSorted);
});

// name sorting
nameUp.addEventListener("click", () => {
  const nameSorted = products.sort((a, b) => a.name.localeCompare(b.name));
  displayProduct(nameSorted);
});

nameDown.addEventListener("click", () => {
  const nameSorted = products.sort((a, b) => b.name.localeCompare(a.name));
  displayProduct(nameSorted);
});

// price sorting
priceUp.addEventListener("click", () => {
  const priceSorted = products.sort((a, b) => a.price - b.price);
  displayProduct(priceSorted);
});

priceDown.addEventListener("click", () => {
  const priceSorted = products.sort((a, b) => b.price - a.price);
  displayProduct(priceSorted);
});

// category sorting
categoryUp.addEventListener("click", () => {
  const categorySorted = products.sort((a, b) =>
    a.category.localeCompare(b.category)
  );
  displayProduct(categorySorted);
});

categoryDown.addEventListener("click", () => {
  const categorySorted = products.sort((a, b) =>
    b.category.localeCompare(a.category)
  );
  displayProduct(categorySorted);
});

// rating sorting
ratingUp.addEventListener("click", () => {
  const ratingSorted = products.sort((a, b) => a.rating - b.rating);
  displayProduct(ratingSorted);
});

ratingDown.addEventListener("click", () => {
  const ratingSorted = products.sort((a, b) => b.rating - a.rating);
  displayProduct(ratingSorted);
});

// =================================================== Filter /
filterCategory.addEventListener("input", (choice) => {
  const filteredChoice = choice.target.value;

  const filteredProduct =
    filteredChoice === "All Categories"
      ? products
      : products.filter((product) => product.category === filteredChoice);

  if (filteredProduct === "") {
    filteredProduct = "";
  }

  console.log(filteredProduct);

  displayProduct(filteredProduct);
});

// =================================================== Reduce /
// const Total = products.reduce((totalExpens, currentPrice) => {
//   return totalExpens + currentPrice.price;
// }, 0);
// console.log("total: ", Total.toFixed(2));
// console.table(products);

// =================================================== Map /
// const mappedData = products.map((data) => {
//   console.log("Mapped Data: ");
//   console.table(data);
// });

// =================================================== Searching /
searchBox.addEventListener("input", (string) => {
  const searching = String(string.target.value).toLowerCase();
  // console.log(searching);
  const searchedCategory = products.filter((element) => {
    return element.name.toLowerCase().includes(searching);
  });

  displayProduct(searchedCategory);

  console.log(searchedCategory);
});

// =================================================== Clear Table /
