let sum = (x,y) =>{
    console.log(x+y);
}
// short form
let mul = (x,y) => (x*y);
sum(3,5);
let result = mul(3,5);
console.log(result);

let teble = n => {
  for(let i = 1; i<=10;i++){
    console.log(i*n);
  }
    
}
teble(5);