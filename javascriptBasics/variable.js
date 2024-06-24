// variable = variable ek type ka container hota hai jo value ko store kerta hai
 
var num1 = 5;  //ye phale use hota tha abhi isse use nahi kerte hai 
console.log(num1);  

let num2 = 4;  // iska use ab kerte hai 
console.log(num2);

const password = 123; // iska use jab hota hai jab hum chaate hai ki password ki value aage code me change na ho tab
console.log(password);

// Scope ka matlab hota hai ke variable kis part of code mein accessible hai. JavaScript mein teen tarike ke scope hote hain:

// Global Scope: Var se declare kiye gaye variables agar kisi function ke bahar declare kiye gaye hain to woh globally accessible hote hain.
// Function Scope: Var se declare kiye gaye variables agar kisi function ke andar declare kiye gaye hain to woh sirf usi function ke andar accessible hote hain.
// Block Scope: Let aur const se declare kiye gaye variables sirf us block ke andar accessible hote hain jismein woh declare kiye gaye hain.