const numbers = [4, 2, 5, 8];

function getNum(num, index) {
  console.log(`index is ${index} number is ${num}`);
}
// getNum(numbers[0]);

// for (let i = 0; i < numbers.length; i++) {
//   getNum(numbers[i], i);
// }

numbers.forEach(getNum);
//what foreach will do is it automatically
//pass 2 arg first is number and second is the index
numbers.forEach(function (num) {
  //annonymous funciton which we not defining function name
  console.log(num * 2);
});

const users = [
  { name: "aryan", age: 22 },
  { name: "King", age: 36 },
  { name: "vada pav", age: 37 },
];
users.forEach((user) => {
  console.log(user.name);
});

//we can do this too
for (let user of users) {
  console.log(user.name);
}
