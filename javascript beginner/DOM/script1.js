// html ko pakda
let heading = document.querySelector("h1");
// let heading = document.querySelector("h1").innerHTML = "changed text";
console.log(heading);
// heading.innerHTML = "hello dosto"

// add and change in css 

heading.style.color = "green";

// event listner 
// do value leta hai first "kya krene per " second "kya kerna hai"
heading.addEventListener("click", function(){
    heading.style.backgroundColor = "orange";
    heading.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    // heading.innerText = "innertext i am firse changed";
})