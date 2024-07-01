//lexical scope
const val1 = "value1";
function myApp() {
  //   const val1 = "value1";
  const abc = () => {
    // const val1 = "value1";
    console.log("inside function ", val1);
  };
  console.log(val1);
  abc();
}

myApp();
//At first it will check the inside funct
//  is variable there if yes then it will print
//if not then it will check is variable
//there in my lexical area// lexical scope
//if yest then it will use that outside variable

// and  if i place my variable outside the
//function then it will use that one
//the global scope
