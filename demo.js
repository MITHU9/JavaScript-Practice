let a = 5;
let b = 10;

if (a++ < 7 && ++b > 9) {
  console.log("a and b", a, b);
}

console.log("a and b", a, b);

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + i);
}

(function fnA(a) {
  return (function fnB(b) {
    console.log(a);
  })(1);
})(0);

console.log(3 > 2 > 1);
console.log(1 + "1" - 1);
console.log(["1", "2", "3"] + 90);
console.log(["1", "2", "3"] - 90);
let arr = [1, 2, 3, 4, 5];
console.log(arr[2], arr.length);
arr.length = 0;
console.log(arr[2], arr.length);
console.log(arr[102]);

console.log("=======");

//custom reduce function
Array.prototype.myReduce = function (callback, init = 0) {
  let accumulator = init;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

//filter and sort interview questions
const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics", discount: 10 },
  { id: 2, name: "Shoes", price: 200, category: "Fashion", discount: 0 },
  {
    id: 3,
    name: "Smartphone",
    price: 800,
    category: "Electronics",
    discount: 5,
  },
  { id: 4, name: "T-shirt", price: 50, category: "Fashion" },
  { id: 5, name: "Fridge", price: 1200, category: "Appliances", discount: 20 },
];

// input
// getFilteredProducts(products, 100, 1000, 'Electronics', 'price');
// output
// [
//   { id: 3, name: 'Smartphone', price: 760, category: 'Electronics' }, // 5% discount applied
//   { id: 1, name: 'Laptop', price: 900, category: 'Electronics' },      // 10% discount applied
//   ]

function getFilteredProducts(
  products,
  minPrice,
  maxPrice,
  categoryFilter,
  sortBy
) {
  //Filter products based on price range and category
  let filteredProducts = products.filter((product) => {
    let finalPrice = product.price;
    if (product.discount) {
      finalPrice = product.price - (product.price * product.discount) / 100;
      product.price = finalPrice;
    }

    return (
      finalPrice >= minPrice &&
      finalPrice <= maxPrice &&
      product.category === categoryFilter
    );
  });

  return filteredProducts.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    }
  });
}

const product = getFilteredProducts(
  products,
  100,
  1000,
  "Electronics",
  "price"
);

console.log(product);

// const obj = {
//   foo: 1,
// };
// obj.bar = 2;
// console.log(obj);
// const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);
// const product = {
//   name: "Laptop",
//   model: "Yoga 3",
//   price: 49000,
//   dusk: "512SSD",
// };

// const { price } = product;

// console.log(price);
// const { x, y, z } = { x: 1, y1: 2, z: 3 };

// console.log(y); // 1, 2, 3
// function min(nums) {
//   return Math.min(nums);
// }
// console.log(min([1, 3, 2]));
// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter((n) => n % 2);
// console.log(output);
