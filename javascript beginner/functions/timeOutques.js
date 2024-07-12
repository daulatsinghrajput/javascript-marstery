// print 5 times hello world in setInterval every 2sec 

const id = setInterval(() => {
    console.log("hello world");
}, 2000);

setTimeout(() => {
   clearInterval(id);
}, 10000);