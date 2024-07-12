const arr = [1, 2, 3, 4, 5];

arr.forEach((el)=>{
    console.log(el);
})

let studentInfo = [{
    name: "daulat singh",
    id: 123,
    city: "jaipur"
},
{
    name: "harsh",
    id: 124,
    city: "lalsot"

},
{
    name: "manu",
    id: 125,
    city: "dausa"
}]

console.log(studentInfo);

studentInfo.forEach((info)=> {
    console.log(info);
})

studentInfo.forEach((studentInfo)=> {
    console.log(studentInfo.name);
})