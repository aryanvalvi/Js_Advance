// sets( it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guranteed
//  unique items only (no duplicates allowed)

const numbers = new Set([1, 2, 3]);
console.log(numbers);
console.log(numbers[2]); //undefined

const string = new Set(["abc"]);
console.log(string);

string.add(2);
string.add([1, 2, 3]);
if (numbers.has(1)) {
  console.log("1 is present");
} else {
  console.log("1 is not present");
}

// now apply for loop since it is iterable

for (let num of numbers) {
  console.log(num);
}
