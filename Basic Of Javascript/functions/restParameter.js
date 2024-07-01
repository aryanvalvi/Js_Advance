//rest parameter

function myFunc(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

// myFunc(1, 2, 3, 4, 5, 6);
let sum = 0;
function addAll(...a) {
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  console.log(sum);
}

addAll(1, 2, 3, 4, 5);
