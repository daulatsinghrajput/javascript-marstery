// // for each 
// let arr = [2, 4, 6, 8, 2, 1];
// arr.forEach(function(element, index) {
// console.log(element, index, arr);
// } )

// arr.forEach((element, index) => {
//     console.log(element, index, arr);
//     } )

// const heros = ["rohit", "mayank", "sunny", "loha", "mohit"];

// heros.forEach((hero =>{
//     console.log(hero.toUpperCase());
// }))

// map 
// heros.map((hero, index) =>{
//     console.log(hero, index, heros);
// })

// heros.map((hero)=>{ console.log(hero.toUpperCase())})


//filter

// const filterHeros = heros.filter((hero) => {
//     return hero.endsWith('t');
// })
// console.log(filterHeros);

// reduce

// let cardBill = [20, 30, 50, 50];
// let total = cardBill.reduce((prev, curr) => prev+curr,0)
// console.log(total);


//every

let nums = [100, 300, 500, 345, 650, 436];
// const highNums = nums.every((num) => 
//     typeof num === 'number'
// )
// console.log(highNums);

let aboveNums = nums.find((num) => num > 300)
console.log(aboveNums);