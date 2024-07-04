// array declareation
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);  // object

let arr2 = [6, 7, 8, 9, 10];

// const arr3 = arr.concat(arr2);  another method
// const arr3 = [arr, arr2];  another method
const arr3 = [...arr, ...arr2];  // spread operator  ==> felado ek ek element me
console.log(arr3);

let newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr);

