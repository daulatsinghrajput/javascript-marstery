const choise = confirm("are you ready for play guess game");
if(choise == true){
    const max  = prompt("enter the max num ");
const random = (Math.floor(Math.random()*max))+1;
guess = prompt("guess the number");

while(true){
    if (guess == "quit"){
        console.log("you quit");
        break;
    }
    if (guess == random){
        console.log("you win");
        break;
    }
    else if(guess < random){
        guess = prompt("your guess was small please try again");
    
     }
    else {
        guess = prompt("your guess was large please try again");
    }
    // else{
    //     guess = prompt("you fail try again");
    // }
}
}
else{
    console.log("thank you for your conformation");
}


