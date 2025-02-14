// # Product Inventory System:
// -> Filter products by category.
// -> Calculate the average product price using reduce().
// -> Sort products by name, price, category and rating.

// Products
const products = [
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Mechanical Keyboard",
    price: 89.99,
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Laptop Stand",
    price: 34.99,
    category: "Accessories",
    rating: 4.5,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "USB-C Hub",
    price: 29.99,
    category: "Accessories",
    rating: 4.4,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Ergonomic Chair",
    price: 199.99,
    category: "Furniture",
    rating: 4.8,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Standing Desk",
    price: 299.99,
    category: "Furniture",
    rating: 4.7,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Leather Wallet",
    price: 24.99,
    category: "Fashion",
    rating: 4.2,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Sunglasses",
    price: 59.99,
    category: "Fashion",
    rating: 4.3,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Fitness Tracker",
    price: 99.99,
    category: "Fitness",
    rating: 4.3,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Adjustable Dumbbells",
    price: 249.99,
    category: "Fitness",
    rating: 4.7,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Cookware Set",
    price: 159.99,
    category: "Home & Kitchen",
    rating: 4.5,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Electric Kettle",
    price: 49.99,
    category: "Home & Kitchen",
    rating: 4.4,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Portable Power Bank",
    price: 39.99,
    category: "Accessories",
    rating: 4.3,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Wireless Earbuds",
    price: 79.99,
    category: "Electronics",
    rating: 4.6,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Smart LED Bulbs",
    price: 34.99,
    category: "Home & Kitchen",
    rating: 4.2,
  },
  {
    id: "id" + Math.random().toString(16).slice(2),
    name: "Adjustable Monitor Arm",
    price: 59.99,
    category: "Furniture",
    rating: 4.4,
  },
];

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
const filterCategory = "Electronics";

const filteredProduct = products.filter((product) => {
  return product.category === filterCategory;
});
// console.log(`Filter By Category: ${filterCategory}`);
// console.table(filteredProduct);

// =================================================== Reduce /
const Total = products.reduce((totalExpens, currentPrice) => {
  return totalExpens + currentPrice.price;
}, 0);
// console.log("total: ", Total.toFixed(2));
// console.table(products);

// =================================================== Map /
const mappedData = products.map((data) => {
  //   console.log("Mapped Data: ");
  //   console.table(data);
});

// =================================================== Searching /
