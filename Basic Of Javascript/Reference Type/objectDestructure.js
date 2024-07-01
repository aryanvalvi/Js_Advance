const band = {
  bandName: "abc",
  famousSong: "king",
  year: 1999,
  anotherFamousSong: "king2",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong);

//object Destructuring
const { bandName, famousSong: let1, ...remaining } = band;

console.log(band);
console.log(let1);
console.log(remaining);
