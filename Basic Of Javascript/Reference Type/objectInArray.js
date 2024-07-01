const user = [
  {
    id: 1,
    name: "aryan",
  },
  { id: 2, name: "rohit" },
  { id: 3, name: "virat" },
];

// console.log(user);

// for (let users of user) {
//   console.log(users);
// }

// for (let i = 0; i <= user.length; i++) {
//   console.log(user[i].name);
// }

//destructuring

const [user1, { id }, { name: king }] = user;

console.log(user1.name);
console.log(id);
console.log(king);
