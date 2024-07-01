//block scope vs function scope
//var is function scope

//let and const are block scope
{
  let firstName = "Aryan";
  const virat = "virat";
}
// console.log(firstName); //uncaught reference error
// console.log(virat); //uncaught reference error

//what if
{
  let firstName = "Aryan";
  //now thiss firstname vairable diff from the
  //previous version
}

//Now Global Scope
let firstName = "sachin";
//now this global scope is diff

//var is a function Scope

{
  var name = "Aryan";
}
console.log(name); //now i can access the name sice it is afucntion socpe

function myApp2() {
  if (true) {
    // let firstName2 = "Aryan";
    console.log(firstName2);
  }
  console.log(firstName2);
}
