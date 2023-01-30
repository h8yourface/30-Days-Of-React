const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

let prices = [];
let sum = 0;

// products.forEach((el) => {
//   if (typeof el.price == "number") {
//     sum += el.price;
//   }
// });

let filteredProducts = products.filter((el) => typeof el.price == "number");
filteredProducts.map((el) => prices.push(el.price));

sum = prices.reduce((acc, cur) => acc + cur);

let firstWithoutPrice = products.find(el => typeof el.price !== 'number')

console.log(firstWithoutPrice);
