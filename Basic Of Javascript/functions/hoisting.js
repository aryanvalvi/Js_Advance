hello(); //it will run while function delclareation
function hello() {
  console.log("hello");
} //this is called hoisting

hello2(); //it will not work wihc function expression
const hello2 = function () {
  console.log("hello2");
};

hello3(); //same with arrow fucntion will not work
const hello3 = () => {
  console.log("hello3");
};
