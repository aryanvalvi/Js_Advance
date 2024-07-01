// parameter destructuing
//object
//react

const person = {
  firstName: "Aryan",
  gender: "Male",
};

// function printObject(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }
function printObject({ firstName, gender }) {
  console.log(firstName);
  console.log(gender);
}
printObject(person);
