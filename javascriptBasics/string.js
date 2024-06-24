let str = "hello good morning";

// Upper case
console.log(str.toUpperCase());

// Lower case
console.log(str.toLowerCase());

// Length
console.log(str.length);

// Index of 'g'
console.log(str.indexOf("g"));

// Includes 'good'
console.log(str.includes("good"));

// Includes 'bad'
console.log(str.includes("bad"));

// Slice
console.log(str.slice(0, 5)); // Output: hello

// Replace
console.log(str.replace("morning", "evening")); // Output: hello good evening

// charAt
console.log(str.charAt(0)); // Output: h

// charCodeAt
console.log(str.charCodeAt(0)); // Output: 104

// concat
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Output: Hello World


// Specified index par character return karta hai.
console.log(str.charAt(0)); // Output: h


// Ek ya zyada strings ko concatenate karta hai.
console.log(str1.concat(" ", str2)); // Output: Hello World


// String ko array of substrings mein split karta hai.
let words = str.split(" ");
console.log(words); // Output: ["hello", "good", "morning"]


// String ke start aur end se whitespace ko remove karta hai.
let strWithSpaces = "  hello good morning  ";
console.log(strWithSpaces.trim()); // Output: "hello good morning"

// true return karta hai agar string specified substring se start hoti hai.
console.log(str.startsWith("hello")); // Output: true

// true return karta hai agar string specified substring se end hoti hai.
console.log(str.endsWith("morning")); // Output: true