// set ko create kerna 

let mySet = new Set();

let arr = [1, 2, 3, 4, 5];
let newSet = new Set(arr);
console.log(newSet);

// adding value in set

newSet.add(6);
newSet.add(3);  // don't repeat
newSet.add(9);
newSet.add(5);  // don't repeat
console.log(newSet);

// remove value 

newSet.delete(9);
console.log(newSet);

// remove two value at a time

newSet.delete(5,6);  // only one value deleted
console.log(newSet);

newSet.delete(6, 5); // only one value deleted
console.log(newSet);

// find size 

console.log(newSet.size);

// value exist kerti bhi hai ya nahi

console.log(newSet.has(2));   // true
console.log(newSet.has(6));   // false

// clera kerna set ko

newSet.clear();
console.log(newSet.size);


// console.log(newSet.clear);

