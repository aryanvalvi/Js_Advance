let goalnum = 20;

let guessNum = +prompt("Enter Your Number");

console.log(typeof guessNum, guessNum);

if (guessNum === 20) {
  console.log("You are right");
} else {
  if (guessNum <= 20) {
    console.log("Too Low");
  } else {
    console.log("Too High");
  }
}
