//alert('Привет! Если возникли вопросы в ходе проверки или что-то сломалось по непонятной причине - не стесняйся написать в дискорд Cpt.Bloodwing#2351 или в телеграм @screwpassenger')

/*burger*/
const burger = document.querySelector('.burger-menu');
const header = document.querySelector('header')
const cross = document.querySelector('.cross')
const nav = document.querySelector('nav')
const navbar = document.querySelector('.navbar')
const logo = document.querySelector('.header-logo')
const logoText = document.querySelector('.header-logo-text')
const logoBamboo = document.querySelector('.logo-bamboo')
const aboutNavbar = document.querySelector('.about-navbar')
const designedBy = document.querySelector('.designed-by')
const popUp = document.querySelector('.pop-up-background')
let toggle = false;

burger.addEventListener('click', () => {
    header.classList.toggle('header-toggle')
    burger.classList.toggle('cross')
    nav.classList.toggle('visible')
    navbar.classList.toggle('nav-toggle')
    logo.classList.toggle('header-logo-toggle')
    logoText.classList.toggle('header-logo-text-toggle')
    logoBamboo.classList.toggle('logo-bamboo-toggle')
    popUp.classList.toggle('visible')
    aboutNavbar.classList.toggle('about-navbar-toggle')
    designedBy.classList.toggle('visible')
    designedBy.classList.toggle('designed-by-toggle')
    if(toggle === false){
        burger.src = "../../assets/icons/nav-cross.svg"
        aboutNavbar.innerHTML = '<a href="./index.html">About</a>'
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
    popUp.classList.toggle('visible')
    aboutNavbar.classList.toggle('about-navbar-toggle')
    designedBy.classList.toggle('visible')
    designedBy.classList.toggle('designed-by-toggle')
    if(toggle === false){
        burger.src = "../../assets/icons/nav-cross.svg"
        aboutNavbar.innerHTML = '<a href="./index.html">About</a>'
        toggle = true
    } else {
        burger.src = "../../assets/icons/burger_menu.svg"
        aboutNavbar.innerHTML = 'About'
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
        aboutNavbar.classList.toggle('about-navbar-toggle')
        designedBy.classList.toggle('visible')
        designedBy.classList.toggle('designed-by-toggle')
        burger.src = "../../assets/icons/burger_menu.svg"
        aboutNavbar.innerHTML = 'About'
        toggle = false
    }
})

/*slider*/
const wrapper = document.querySelector('.animal-photos-slider')
let slider = document.querySelector('.animals-photos-wrapper');
const leftArrow = document.querySelector('.animal-photos-arrow-left')
const rightArrow = document.querySelector('.animal-photos-arrow-right')
const images = document.querySelectorAll('.animal-photo-wrapper')

leftArrow.addEventListener('click', () => {
    changeImages('left')
})

rightArrow.addEventListener('click', () => {
        changeImages('right')
    })

function changeImages(direction){
    let imagesPull = [];
    while(imagesPull.length < 6){
        let image = images[Math.floor(Math.random() * images.length)];
        if(imagesPull.length < images.length){
            if(!imagesPull.includes(image)){
                imagesPull.push(image)
            }
        }
    }
    const sliderClone = slider.cloneNode(true)
    slider.classList.toggle(`slider-toggle-${direction}`)
    setTimeout(() => {
        wrapper.removeChild(slider)
        wrapper.appendChild(sliderClone)
        sliderClone.innerHTML = ''
        for(let i = 0; i < 6; i++){
            sliderClone.appendChild(imagesPull[i])
        }
        slider = sliderClone;
    }, 500)


}