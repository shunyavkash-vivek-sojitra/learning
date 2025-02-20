// search
let searchBox = document.querySelector("#searchBox");

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
let products = getData();

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

// =================================================================

const deBounce = (func, delay) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const otherFunc = () => {
  console.log("After:");
};

const funcCalled = deBounce(otherFunc, 3000);

funcCalled();
