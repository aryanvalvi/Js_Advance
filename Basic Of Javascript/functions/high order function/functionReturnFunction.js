//function returning function
function myFunc() {
  function hello() {
    console.log("Hello world");
  }
  return hello;
}

const ans = myFunc();
ans();
