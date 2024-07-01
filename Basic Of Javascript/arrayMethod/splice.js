//splice
// start , delete , insert

const array = ["insert1", "insert2", "insert3"];

// delete
//delete ke sath ye return bhi dega deleted item
array.splice(1, 1);
//start from first index and delte 1 element
console.log(array);

//insert

array.splice(1, 0, "inserted Item");

console.log(array);

//insert and delete

array.splice(1, 2, "insert1", "insert2");
console.log(array);
