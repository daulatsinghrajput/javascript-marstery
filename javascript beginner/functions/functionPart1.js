const powertwo = (n) => {
    return () => {
        return () =>{
           return 2/2;
        };
    }

}
let value = powertwo(2);
let value2 = value();
let value3 = value2();
console.log(value3);
// console.log(value2());


let sum = (a) => {
    return a+a;
} 
console.log(sum(2));


const num1 = x =>{
    const num2 = y =>{
        const num3 = z =>{
            return x+y+z
        }
        return num3;
    }
    return num2;
}
console.log(num1(2)(3)(4))