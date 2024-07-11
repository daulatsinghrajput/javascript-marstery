// let setA = new Set(1, 6, 7, 3, 9, 10);
// let setB = new Set(2, 4, 6, 0, 2, 6,  7);

// function setDiffernce(setA, setB) {
//    let newSet= new Set([...setA].filter(value => !setB.has(value)
   
//     ))
//     return newSet;
// }
// console.log(newSet);

let setA = new Set([1, 6, 7, 3, 9, 10]);
let setB = new Set([2, 4, 6, 0, 2, 6, 7]);

function setDifference(setA, setB) {
    let newSet = new Set([...setA].filter(value => !setB.has(value)));
    return newSet;
}
console.log(setDifference(setA, setB));
// let difference = setDifference(setA, setB);
// console.log(difference);