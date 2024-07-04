function manyArguments(){
    let args = Array.from(arguments);
    console.log(args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
    return finalArr;
}

let result =manyArguments(1, 2, 3, 4, 5);
console.log(typeof result);

function arguments2(...args){   // rest operator "bohat sari values ko ek array me convert kerna"
    console.log(args);
    console.log(typeof args);
}
arguments2(1, 2, 3, 4, 5);

let arr2 = [6, 7, 8, 9, 10];

// const arr3 = arr.concat(arr2);  another method
// const arr3 = [arr, arr2];  another method
const arr3 = [...arr, ...arr2];  // spread operator  ==> felado ek ek element me
console.log(arr3);

let newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr);
