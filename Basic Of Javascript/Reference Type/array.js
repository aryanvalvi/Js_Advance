const fruits = ["mango", "banana", "apple"];
console.log(fruits); //it is in obj
// console.log(Array.isArray(fruits));

fruits.push("kivi");
console.log(fruits);
let poppedfruit = fruits.pop();
console.log(poppedfruit);

console.log(fruits);

//if u want to add data at starting then
fruits.unshift("grape");
console.log(fruits);

//if u want to remove from first index
fruits.shift("grape");
console.log(fruits);

//push and pop have better speed than shift and unshift

// how to clone array
let array1 = ["item1", "item2"];
let array2 = array1.slice(0);
let array3 = [].concat(array1);
// new way
let array4 = [...array1];

//clone and add
let array5 = array1.slice(0).concat(["item4"]);
// or
let array6 = [].concat(array1, ["item3", "item6"]);
// or
let array7 = [...array1, "item7", "item8"];

//2 spread operator
let array8 = [...array1, ...array7];
