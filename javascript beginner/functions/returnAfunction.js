// function odd(n){
//     console.log(!(n%2==0));
// }
// odd(2);
// odd(5);

// function even(n){
//     console.log(n%2==0);
// }

// even(2);
// even(5);

function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
            console.log("odd");
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2==0);
            console.log("odd");
        }
    }
    else{
            console.log("wrong argument")
        }
    }

oddEvenTest("even");


