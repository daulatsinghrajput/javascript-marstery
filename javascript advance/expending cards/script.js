const imgs = document.querySelectorAll('.img');

imgs.forEach((img) => {  // har img ke lia ye hi function call hoga
    img.addEventListener('click',() =>{
        removeActiveClasses()
        img.classList.add('active')
    })
})
function removeActiveClasses(){
    imgs.forEach(img => {
        img.classList.remove('active')
    })
}
