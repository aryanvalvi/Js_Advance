// iterables
//jisme hum for of loop laga sakte he
//string , array are iterables

const firstName = "Aryan";
for (let char of firstName) {
  console.log(char);
}

const items = ["item1", "item2", "item3"];

for (let item of items) {
  console.log(item);
}

//okay now see can we iterate over objects
const users = {
  user1: "aryan",
  user2: "rohit",
  user3: "kapil",
};

// for (let abc of users) {
//   console.log(abc);
// }
//objects are not iterable

//Array like object
//jinke pass length property hoti hai
//aur jinko hum index se access kar sakte he
// example : string

const firstname = "aryan";
console.log(firstname.length);
console.log(firstname[2]);
