const numbers = [2, 3, 4, 6, 7, 8];

console.log(numbers.every((num) => num % 2 === 0));
//its nothing but it checks every element
// and its give true and false

//usecase

const userCart = [
  { productName: "laptop", price: 50000 },
  { productName: "mobile", price: 40000 },
  { productName: "TV", price: 20000 },
];
const ans = userCart.every((cartItem) => cartItem.price < 100000);
console.log(ans);
