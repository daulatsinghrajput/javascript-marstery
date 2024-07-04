let mySet = new Set([1, 2, 3, 4, 5]);

console.log(mySet);
console.log([...mySet]);

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

console.log(mySet.entries());
console.log(mySet.values());
console.log(mySet.keys());