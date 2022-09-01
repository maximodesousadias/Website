//Hide Logo from NavBar

const divMenu = document.getElementById('menu-icon');
const divLogo = document.getElementById('div-logo');

divMenu.addEventListener('click', 
    ocultarLogo)

function ocultarLogo(){
    divLogo.classList.toggle('hide-div');
}

//Hide Menu after selecting Page.

const menuOptions = document.querySelectorAll("[data-menu-page]")

menuOptions.forEach(menuOption => {
    menuOption.addEventListener("click", () => {
        document.getElementById("toggle-nav").checked = false
    })
})

//Carousel

const buttons = document.querySelectorAll("[data-carousel-button]")

console.log(menuOptions)

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })  
})