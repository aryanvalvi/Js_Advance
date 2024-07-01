const myArray = ["Hello", "cat", "dog", "lion"];

function isLength(string) {
  return string.length === 3;
}

const ans = myArray.find(isLength);
// find also return true value
// and if its true then it return the value which is in the callback function
//and it will only add the one who matched first time others are not taken
console.log(ans);

const users = [
  { userId: 1, username: "aryan" },
  { userId: 2, username: "aaditya" },
  { userId: 3, username: "king" },
  { userId: 4, username: "rohit" },
];
console.log(users.find((user) => user.userId === 4));
