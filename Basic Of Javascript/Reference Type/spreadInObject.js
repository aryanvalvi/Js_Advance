//spread in array

const array1 = [11, 32, 32];

const array2 = [...array1];

//spead in obj

let ob1 = {
  keyDouble: "keyDouble",
  key: "val1",
};
let ob2 = {
  keyDouble: "keyunique", //the same key value will be replace with new key value
  key1: "val2",
};

let ob3 = { ...ob1, ...ob2 };

const experiment = { ..."abc" }; //{0: 'a', 1: 'b', 2: 'c'}
console.log(experiment);
