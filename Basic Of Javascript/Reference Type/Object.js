// it is reference type and it stored its content in heap memory

// const myOb = {
//   name: "aryan",
//   age: 22,
// };

// console.log(myOb);
//how to add new key:value

// myOb.hobby = ["games", "cricket", "series"];
// console.log(myOb);

//we can also like this
// console.log(myOb.name);

//we can also access like this
// console.log(myOb["name"]);
// in js the key is by default in string
//we can also write our string like this
// const myOb = {
//   name: "aryan",
//   age: 22,
// };

// what if my key name is something like this
const key = "email";
const myOb = {
  name: "aryan",
  age: 22,
  "person hobies": ["game"],
};

// we cant access the thing like this
// console.log(myOb.person hobies)
// we can like this
console.log(myOb["person hobies"]);

//how to add the key of an variable
myOb[key] = "abc@gmail.com";
console.log(myOb);
