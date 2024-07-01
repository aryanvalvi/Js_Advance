//using const for creating constant variable

const { removeListener } = require("process");

//heap memory ['apple','mango']

const fruits = ["apple", "mango"];
// fruits = ["pineapple"]  will not work
// but if we have array strore in heap memory na so we have that
// array address and we are targeting that add to add or remove
// elements
fruits.push("pineapple");
