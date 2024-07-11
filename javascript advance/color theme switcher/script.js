const boxes = document.querySelectorAll('.button'); // Select all elements with the class 'button'
const body = document.querySelector('body'); // Select the body element

boxes.forEach(function (box) {
   box.addEventListener("click", (e) => { // Add click event listener to each box
      console.log(e);
      console.log(e.target);
      
      body.style.backgroundColor = e.target.id; // Set the background color of the body to the id of the clicked element
   });
});
