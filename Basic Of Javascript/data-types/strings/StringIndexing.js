let name = "aryan";
// aryan
// 01234
// but length is =5
console.log(name.length);
//get last character
console.log(name[name.length - 1]);
//name is aryan, then the name we cant is from the lentgh and the length is name.lenght which is 5
//  and if want last chracter then lenght 5 - 1 that is 4 and the foruth one accordinf to this // aryan
// 01234 is n

//Trim

let name2 = "   aryan    ";

console.log(name2);
console.log(name2.length);
name2 = name2.trim();
console.log(name2.length);

//toUpperCase(), toLowerCase(), slice()
name2 = name2.toUpperCase();
console.log(name2);
name2 = name2.toLowerCase();
console.log(name2);

name2 = name2.slice(1, 3);
console.log(name2);
