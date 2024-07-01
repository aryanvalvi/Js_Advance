for (let i = 0; i <= 9; i++) {
  console.log(i);
}
// we cannot access the i of the loop
// but we can access the var
// console.log(i);

// first 10 natural number ka sum

let total = 0;
for (let i = 0; i <= 10; i++) {
  total = total + i;
}
console.log(total);

// Break , Continue

// Break

for (i = 0; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

//continue
for (i = 0; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}
