//callback Function

function myFunc2(name) {
  console.log("inside my func 2" + name);
}

function myFunc(callback) {
  callback("aryan");
}

myFunc(myFunc2);
//We are Calling A function inside a function
// this is called callback function
