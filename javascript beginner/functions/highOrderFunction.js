function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}
function greet(){
    console.log("hello");
}
multipleGreet(greet,4);