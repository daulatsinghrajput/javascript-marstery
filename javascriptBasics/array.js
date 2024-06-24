let arr = ["rohit", "mohit", "vikash", "mohan", "mayank"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log(arr);

// Additional Points about Arrays:
// Definition: Arrays ordered list of values hote hain jine hum elements kehte hain. Ye elements kisi bhi data type ke ho sakte hain.
// Indexing: Arrays zero-based indexing use karte hain, matlab first element ka index 0 hota hai.
// Methods: Arrays ke saath kuch built-in methods bhi hote hain jaise push(), pop(), shift(), unshift(), slice(), aur splice(), jo array manipulation ke liye use hote hain.

// Example of Array Methods:

// push() ek naye element ko array ke end mein add karta hai.
// pop() array ke last element ko remove karta hai.
// shift() array ke first element ko remove karta hai.
// unshift() ek naye element ko array ke beginning mein add karta hai.

// pop operation 
arr.pop();
console.log(arr);
// push opeartion
arr.push("yash");
console.log(arr);
// shift
arr.shift();
console.log(arr);
// unshift
arr.unshift("jay");
console.log(arr);


// slice(start, end):
// Array ke specified start aur end index ke beech ka portion return karta hai.
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]


// splice(start, deleteCount, item1, item2, ...):
// Array se elements ko remove aur add karta hai.
arr.splice(1, 1, 4, 5);
console.log(arr); // Output: [1, 4, 5, 3]

// concat(array2):
// Do ya zyada arrays ko concatenate karta hai aur ek naya array return karta hai.
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4]

// indexOf(element):
// Specified element ka pehla index return karta hai. Agar element nahi milta to -1 return karta hai.
console.log(arr.indexOf(4)); // Output: 1

// includes(element):
// true return karta hai agar array specified element ko contain karta hai, nahi to false.
console.log(arr.includes(4)); // Output: true

// join(separator):
// Array ke saare elements ko ek string mein join karta hai, specified separator ke saath.
let joinedStr = arr.join("-");
console.log(joinedStr); // Output: 1-4-5-3

// reverse():
// Array ke elements ko reverse order mein karta hai.
arr.reverse();
console.log(arr); // Output: [3, 5, 4, 1]

// sort():
// Array ke elements ko sort karta hai.
arr.sort();
console.log(arr); // Output: [1, 3, 4, 5]

// map(callback):
// Array ke har element pe callback function ko apply karta hai aur ek naya array return karta hai.
let mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // Output: [2, 6, 8, 10]


// filter(callback):
// Array ke har element pe callback function ko apply karta hai aur ek naya array return karta hai jo sirf un elements ko contain karta hai jo condition ko satisfy karte hain.
let filteredArr = arr.filter(x => x > 2);
console.log(filteredArr); // Output: [3, 4, 5]

// reduce(callback, initialValue):
// Array ke elements ko reduce karke ek single value mein convert karta hai.
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 13

