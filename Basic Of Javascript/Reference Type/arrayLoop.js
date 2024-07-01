let fruits = ["apple", "banana", "grapes", "banana"];
let fruits2 = [];
for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(fruits[i].toUpperCase());
  fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

//while loops
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

//For Of Loop
for (let fruit of fruits) {
  console.log(fruit);
}

//for in loop
//we increase our index value till the lenght of and array
for (let index in fruits) {
  console.log(fruits[index]);
}
