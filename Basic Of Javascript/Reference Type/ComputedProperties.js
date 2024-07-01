let abc = "obj1";
let abc2 = "obj2";

let value = "val1";
let value2 = "val2";

// i want something like this
// const obj ={
//     obj1:"val1",
//     obj2:"val2"
// }

//  we can do this by []

const obj = {
  [abc]: value,
  [abc2]: value2,
};

// or

obj[abc] = value;
obj[abc2] = value2;
