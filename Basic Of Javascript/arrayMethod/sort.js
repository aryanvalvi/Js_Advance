const numbers = [2, 4, 1, 50, 3];
//js will sort this as String not a number
// so for string sorting it uses ascii system
numbers.sort();
console.log(numbers);

const names = ["king", "aryan", "rohit"];
// now sort will sort it like alphate order
// capital word will be first
names.sort();
console.log(names);

//ascending
numbers.sort((a, b) => a - b);
console.log(numbers);
//desending
// b-a

//now if we take 2  number 1200 400
// a  -  b =>800
// a-b => positive (greather than 0)
// then b =a  410,1200

//useCase
const userCart = [
  { productName: "laptop", price: 50000 },
  { productName: "mobile", price: 40000 },
  { productName: "TV", price: 20000 },
];

//to make new array
const lowToHigh = userCart.slice(0).sort((a, b) => a.price - b.price);
const HightoLow = userCart.slice(0).sort((a, b) => b.price - a.price);

console.log(userCart);
console.log(lowToHigh);
console.log(HightoLow);
