
// hold element
let headThree = document.querySelector('h3');
let para = document.querySelector('p');
let headOne = document.querySelector('h1');
let spanWorld = document.querySelector('span');
let container = document.querySelector('.container')

// adding something using javascript
let createOne = document.createElement('p');
let createTwo = document.createElement('p');
let createThree = document.createElement('p');
let createFour = document.createElement('p');

// adding text using javascript
createOne.textContent = 'hi i am createOne';
createTwo.textContent = 'hi i am createTwo';
createThree.textContent = 'hi i am createThree';
createFour.textContent = 'hi i am createFour';

// adding element
container.insertAdjacentElement('beforeBegin', createOne);
console.log(container);
container.insertAdjacentElement('beforeEnd', createTwo);
console.log(container);
container.insertAdjacentElement('afterBegin', createThree);
console.log(container);
container.insertAdjacentElement('afterEnd', createFour);
console.log(container);


// remove h3 
container.removeChild(headThree);
para.parentNode.removeChild(para);

// stylling using javascript
createOne.style.color = "blue";

createTwo.style.cssText = 'color: green; font-size: 2rem; background-color: yellow;'

createThree.setAttribute('style',"color:orange; background-color: red");

// adding id ,class 
para.setAttribute('class', 'para');

// para.classList;
console.log(para.classList);
console.log(para.className);

// event listners

createTwo.addEventListener('dblclick', function(){
    createTwo.style.color = 'pink';
})

function clk(){
    createOne.style.backgroundColor = 'green';
}

createOne.addEventListener('click', clk);

createOne.removeEventListener('click', clk);

// prevent default
let links = document.querySelectorAll('a');
let thirdLink = links[2];


thirdLink.addEventListener('click', function(event){
    event.preventDefault();
    console.log('maza aaya');
});


// create 100 para
let myDiv = document.createElement('div');
document.body.appendChild(myDiv);

function clickPara(){
    console.log('i have clicked on para');
}



for(let i = 1; i<=100; i++){
    let newPara = document.createElement('p');
    newPara.textContent = 'this is para:'+[i];
    newPara.addEventListener('click', clickPara);
    myDiv.appendChild(newPara);
}

let divSpan = document.querySelector('.wrap');

divSpan.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span per click kia :'+ event.target.textContent);
    }
})





