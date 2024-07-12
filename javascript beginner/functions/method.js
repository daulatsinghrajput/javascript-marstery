const calculation ={
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    }
}


// short hand 

// const calculation ={
//     add(a,b) {
//         return a+b;
//     },
//     sub(a,b) {
//         return a-b;
//     },
//     mul(a,b) {
//         return a*b;
//     }
// }

console.log(calculation.add(2,3));