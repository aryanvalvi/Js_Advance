const numbers = [1, 2, 3, 6];
function abc(num) {
  num * num; //undefined * undefined
  return num * num;
}
console.log(numbers.map(abc));
//what map is do is get an callback function
//and map will iterate over each element
//and do as a call back function says
//and gives and NEW array
//function must Return Something

console.log(
  numbers.map((num, index) => {
    return `index is ${index},number is ${num}`;
  })
);
