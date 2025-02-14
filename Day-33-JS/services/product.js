// form
let productFormReset = document.querySelector("#productForm");
let productForm = document.querySelectorAll("#productForm");
let tableBody = document.querySelector("#tbody");

// inputs
let name = document.querySelector("#name");
let price = document.querySelector("#price");
let category = document.querySelector("#category");
let rating = document.querySelector("#rating");

// add button
let btnAdd = document.querySelector(".btnAdd");

// search & filter
let searchBox = document.querySelector("#searchBox");
let filterCategory = document.querySelector("#filterCategory");

// table
let dataTable = document.querySelector("#productTable");

// setData
const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// getData
const getData = () => {
  return JSON.parse(localStorage.getItem("Product")) || [];
};

// Products
const products = getData();
// console.log(products);

// =================================================== Create Product /
const createProduct = (e) => {
  e.preventDefault();

  const newProduct = {
    id: "id" + Math.random().toString(16).slice(2),
    name: name.value.trim(),
    price: price.value.trim(),
    category: category.value.trim(),
    rating: rating.value.trim(),
  };

  products.push(newProduct);
  setData("Product", products);
  productFormReset.reset();

  // console.log(newProduct);
  displayProduct();
};

// =================================================== Display Product /
const displayProduct = () => {
  products.forEach((product) => {
    const tableRow = tableBody.insertRow();
    tableRow.insertCell(0).textContent = product.id;
    tableRow.insertCell(1).textContent = product.name;
    tableRow.insertCell(2).textContent = product.price;
    tableRow.insertCell(3).textContent = product.category;
    tableRow.insertCell(4).textContent = product.rating;
  });
};

displayProduct();

// =================================================== Sorting /
// name sorting
const sortByName = () => {
  const nameSorted = products.sort((a, b) => a.name.localeCompare(b.name));
  console.table("Sorted By Name:");
  console.table(nameSorted);
};
// sortByName();

// price sorting
const sortByPrice = () => {
  const priceSorted = products.sort((a, b) => a.price - b.price);
  console.table("Sorted By Price:");
  console.table(priceSorted);
};
// sortByPrice();

// category sorting
const sortByCategory = () => {
  const categorySorted = products.sort((a, b) =>
    a.category.localeCompare(b.category)
  );
  console.table("Sorted By Category:");
  console.table(categorySorted);
};
// sortByCategory();

// rating sorting
const sortByRating = () => {
  const ratingSorted = products.sort((a, b) => b.rating - a.rating);
  console.table("Sorted By Rating:");
  console.table(ratingSorted);
};
// sortByRating();

// =================================================== Filter /
// const filterCategory = "Electronics";

// const filteredProduct = products.filter((product) => {
//   return product.category === filterCategory;
// });
// console.log(`Filter By Category: ${filterCategory}`);
// console.table(filteredProduct);

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
