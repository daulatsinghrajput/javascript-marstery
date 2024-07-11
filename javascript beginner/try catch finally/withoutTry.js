let x = undefined;
console.log(x[0]);

// output
// [Running] node "d:\code\full stack web dev\javascript-mastery\javascript beginner\try catch finally\withoutTry.js"
// d:\code\full stack web dev\javascript-mastery\javascript beginner\try catch finally\withoutTry.js:2
// console.log(x[0]);
//              ^

// TypeError: Cannot read properties of undefined (reading '0')
//     at Object.<anonymous> (d:\code\full stack web dev\javascript-mastery\javascript beginner\try catch finally\withoutTry.js:2:14)
//     at Module._compile (node:internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.14.0
