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
    changeImages('200%', '-200%')
})

rightArrow.addEventListener('click', () => {
        changeImages('-200%', '200%')
})

function changeImages(direction, opposite){
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
    /* slider.classList.toggle(`slider-toggle-${direction}`) */
    slider.style.transform = `translate(${direction})`
    setTimeout(()=> {
        wrapper.removeChild(slider)
        /* sliderClone.classList.toggle(`slider-toggle-${opposite}`) */
        sliderClone.style.transform = `translate(${opposite})`
        sliderClone.style.visibility = `hidden`;
        sliderClone.innerHTML = ''
        for(let i = 0; i < 6; i++){
            sliderClone.appendChild(imagesPull[i])
        }
        wrapper.appendChild(sliderClone)
        setTimeout(()=> {
            /* sliderClone.classList.toggle(`slider-toggle-${opposite}`) */
            sliderClone.style.transform = 'translate(0)'
            sliderClone.style.visibility = `visible`;
        },500) 
        slider = sliderClone;
    }, 200)
}

/*testimonials-slider*/

const bar = document.querySelector('.testimonials-slider-bar')
const testWrapper = document.querySelector('.testimonials-wrapper')
const testItems = document.querySelectorAll('.testimonials-item')
const testItemsInner = document.querySelectorAll('.testimonials-inner-item')

bar.addEventListener('input', () => {
    for (const item of testItems) {
        if(window.innerWidth <= 1000){
            item.style.right = `${bar.value*364}px`
        }
        if(window.innerWidth > 1000 && window.innerWidth < 1300){
            item.style.right = `${bar.value*322}px`
        }
        if(window.innerWidth > 1300){
            item.style.right = `${bar.value*296}px`
        }
    }
})

window.addEventListener('resize', () => {
    bar.value = 0;
    for (const item of testItems) {
            item.style.right = `${bar.value*0}px`
        }
})

/*testimonials pop-up*/
window.addEventListener('load', () => {
    if(window.innerWidth < 1000){
        for (let i = 3; i < 11; i++) {
            testItems[i].style.display = `none`
        }
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth < 1000){
        for (let i = 3; i < 11; i++) {
            testItems[i].style.display = `none`
        }
    }
    if(window.innerWidth >= 1000){
        for (let i = 3; i < 11; i++) {
            testItems[i].style.display = `initial`
        }
    }
})

const popUpTest = document.querySelector('.pop-up-background-test')
const testCrosses = document.querySelectorAll('.testimonials-cross')

popUpTest.addEventListener('click', () => {
        if(window.innerWidth < 1000){
            document.querySelector('.testimonials-pop-up').classList.remove('testimonials-pop-up')
            document.querySelector('.testimonials-pop-up-outer').classList.remove('testimonials-pop-up-outer');
            popUpTest.classList.toggle('visible')
            for(const cross of testCrosses){
                cross.classList.toggle('visible')
            }
        }
    })

for (const item of testItems) {
    if(window.innerWidth < 1000){
        item.addEventListener('click', () => {
            popUpTest.classList.toggle('visible')
            for(const cross of testCrosses){
                cross.classList.toggle('visible')
            }
            item.classList.toggle('testimonials-pop-up-outer')
        })
    }
}
for (const item of testItemsInner) {
    if(window.innerWidth < 1000){
    item.addEventListener('click', () => {
        item.classList.toggle('testimonials-pop-up')
    })
}
}