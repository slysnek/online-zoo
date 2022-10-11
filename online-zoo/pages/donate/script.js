/*burger*/
const burger = document.querySelector('.burger-menu');
const header = document.querySelector('header')
const cross = document.querySelector('.cross')
const nav = document.querySelector('nav')
const navbar = document.querySelector('.navbar')
const logo = document.querySelector('.header-logo')
const logoText = document.querySelector('.header-logo-text')
const logoBamboo = document.querySelector('.logo-bamboo')
const designedBy = document.querySelector('.designed-by')
const popUp = document.querySelector('.pop-up-background')
const donate = document.querySelector('.donate-navbar')
let toggle = false;

burger.addEventListener('click', () => {
    header.classList.toggle('header-toggle')
    burger.classList.toggle('cross')
    nav.classList.toggle('visible')
    navbar.classList.toggle('nav-toggle')
    logo.classList.toggle('header-logo-toggle')
    logoText.classList.toggle('header-logo-text-toggle')
    logoBamboo.classList.toggle('logo-bamboo-toggle')
    donate.classList.toggle('donate-navbar-toggle')
    popUp.classList.toggle('visible')
    designedBy.classList.toggle('visible')
    designedBy.classList.toggle('designed-by-toggle')
    if(toggle === false){
        burger.src = "../../assets/icons/nav-cross.svg"
        toggle = true
    } else {
        burger.src = "../../assets/icons/burger_menu.svg"
        aboutNavbar.innerHTML = 'About'
        toggle = false
    }
})

popUp.addEventListener('click', () => {
    header.classList.toggle('header-toggle')
    burger.classList.toggle('cross')
    nav.classList.toggle('visible')
    navbar.classList.toggle('nav-toggle')
    logo.classList.toggle('header-logo-toggle')
    logoText.classList.toggle('header-logo-text-toggle')
    logoBamboo.classList.toggle('logo-bamboo-toggle')
    donate.classList.toggle('donate-navbar-toggle')
    popUp.classList.toggle('visible')
    designedBy.classList.toggle('visible')
    designedBy.classList.toggle('designed-by-toggle')
    if(toggle === false){
        burger.src = "../../assets/icons/nav-cross.svg"
        toggle = true
    } else {
        burger.src = "../../assets/icons/burger_menu.svg"
        toggle = false
    }
})

window.addEventListener('resize', ()=> {
    if(toggle === true){
        header.classList.toggle('header-toggle')
        burger.classList.toggle('cross')
        nav.classList.toggle('visible')
        navbar.classList.toggle('nav-toggle')
        logo.classList.toggle('header-logo-toggle')
        logoText.classList.toggle('header-logo-text-toggle')
        logoBamboo.classList.toggle('logo-bamboo-toggle')
        popUp.classList.toggle('visible')
        donate.classList.toggle('donate-navbar-toggle')
        designedBy.classList.toggle('visible')
        designedBy.classList.toggle('designed-by-toggle')
        burger.src = "../../assets/icons/burger_menu.svg"
        toggle = false
    }
})

/*amount*/

const customAmount = document.querySelector('.custom-amount')
const money = document.querySelectorAll('.donate-money')
const circlesInput = document.querySelectorAll('.pseudo-circle input')

customAmount.value = 100;

for(let sum of money){
    sum.addEventListener('click', ()=>{
        customAmount.value = parseInt(sum.textContent.slice(1));
    })
}

for(let circle of circlesInput){
    circle.addEventListener('click', ()=>{
        customAmount.value = circle.value;
    })
}

customAmount.addEventListener('input', ()=>{
    for(let circle of circlesInput){
        if(customAmount.value === circle.value){
            circle.checked = true;
        }
    }
})
