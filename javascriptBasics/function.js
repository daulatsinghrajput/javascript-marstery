// Functions JavaScript mein re-usable blocks of code hote hain jo ek specific task perform karte hain. Inko ek baar define karne ke baad, hum unhe multiple baar call kar sakte hain. Ye programming principle "DRY" (Do Not Repeat Yourself) ko follow karne mein madad karte hain, jisse code maintainable aur readable hota hai.

// Functions ke kuch important points hain:

// Definition: Function ko define karne ke liye function keyword ka use hota hai, jaise:

function greet() {
    console.log("Hello, friend! How are you?");
}

// Calling a Function: Function ko call karne ke liye function ka naam followed by parentheses () ka use hota hai, jaise:

greet();

// Parameters and Arguments: Functions mein parameters define kiye jaate hain jo function ke through pass kiye jaate hain. Ye parameters function definition mein declare kiye jaate hain, aur jab function call hota hai to arguments un parameters ko assign karte hain.==>  ()

// Return Statement: Functions mein return statement ka use hota hai jo function se ek value return karta hai.

// perameter

function add(x="10",y="10"){
    console.log(x+y);
}
add(4,5);

// return statement

function sub(x="10",y="5"){
   return x-y;
}
ans = sub();
console.log(ans);
