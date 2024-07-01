const num = [1, 2, 3, 4, 5, 6];

const abc = num.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
  //100 accumulator prize will be 100
);
console.log(abc);

//  accumulator    , currentValue   return
//   1                     2           3
//   3                     3           6
//   6                     4           10
//   10                    5           15
//   15                    6           21

const userCart = [
  { productName: "laptop", price: 50000 },
  { productName: "mobile", price: 40000 },
  { productName: "TV", price: 20000 },
];
const totalAmount = userCart.reduce((totalPrice, CurrentPrice) => {
  return totalPrice + CurrentPrice.price;
}, 0);
console.log(totalAmount);
//totalPrice = 0
// totalprice      currentprice   return
//  0                   50000       50000
// 50000                40000       90000
//90000                 20000        110000
