function singHappyBirthdayyy() {
  console.log("Happy birthday to you ........");
}

singHappyBirthdayyy();
//we are calling invoking and runing function 3 are same

function twoPlustwo() {
  console.log(2 + 2);
}
twoPlustwo();

//Parameter function
function sum(a, b) {
  console.log(a + b);
}
sum(2, 2); //argument

//
console.log(undefined + undefined);

function isEven(a) {
  if (a % 2 === 0) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}
function isEven(a) {
  return a % 2 === 0;
}

// isEven(4);

//input stinf output , first character

function firstChar(a) {
  return a[0];
}
console.log(firstChar("aryan"));

//input array and target number
function targetNum(arr, num) {
  //   return arr[num];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
console.log(targetNum([1, 2, 3, 4], 2));
// console.log(targetNum([1, 2, 3], 2));
