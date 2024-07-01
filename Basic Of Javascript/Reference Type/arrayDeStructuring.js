const myarray = ["value1", "value2", "value3", "value4", "value5"];
// let myvar1 = myarray[0];
// let myvar2 = myarray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// we can do like this

// let [myvar1, myvar2] = myarray;

//what if i want third value to be stored inn myvar2
let [myvar1, , myvar2, ...myRemainingArray] = myarray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log("value of myvar3", myRemainingArray);
