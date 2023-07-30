const shoppingBtn = document.querySelector("#shopBtn");
const shoppingMenu = document.querySelector(".navBottom");
const barBtn = document.querySelector('.bar-menu');
const navLinks = document.querySelector(".navLinks");
const shoppingProducts = document.querySelectorAll("#buyProduct");

shoppingProducts.forEach(product => {
    product.addEventListener("click", ()=> {
        shoppingMenu.classList.toggle('hide');
    })
})


shoppingBtn.addEventListener("click", ()=> {
    shoppingMenu.classList.toggle('hide');

});

barBtn.addEventListener("click", ()=> {
    navLinks.classList.toggle('active');
})

window.addEventListener("click", (e)=> {
    if(e.target == shoppingMenu){
        shoppingMenu.classList.toggle('hide');
    }
    if(e.target == navLinks){
        navLinks.classList.toggle('hide');
    }
})

const arrowRight = document.querySelector(".arrowRight");
const arrowLeft = document.querySelector(".arrowLeft");
const boxes = document.querySelector("#productBoxes")

let i = 0;
arrowRight.addEventListener("click", ()=>{
    if (i === 5){
        return;
    }
    i++;
    boxes.style.transform = `translateX(${-27 * i}vw)`;

})

arrowLeft.addEventListener("click", ()=>{
    if (i === 0){
        return;
    }
    i--;
    boxes.style.transform = `translateX(${-27 * i}vw)`;
})