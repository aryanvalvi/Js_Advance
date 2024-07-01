const numbers = [1, 2, 3, 4, 5, 6, 7];

const isEvan = (num) => {
  return num % 2 === 0;
};
console.log(numbers.filter(isEvan));
//in filter function the callback function will always return
// true or false
//eg in callback function isEvan is returning the only number
//which satify its return eg, if 1 is evan no and the callback
//function is returning flase which its not add into array
//filter function is returning a array
//and if it is 2 means  evan then it returning true means
// the filter function will add that number into array
