const myOb = {
  name: "aryan",
  age: 22,
  "person hobies": ["game"],
};
//for in loop

for (let key in myOb) {
  console.log(myOb[key]);
  console.log(`${key} : ${myOb[key]}`);
}
