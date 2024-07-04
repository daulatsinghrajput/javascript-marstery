let str = ["hello", "hey", "how", "are", "you"];

function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result = result + str[i];
    }
    // return result;
    console.log(result);
}
// let r = concat(str);
// console.log(r);
concat(str);