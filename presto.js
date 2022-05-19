//Query selectors
const arrowNavbar = document.querySelector('#arrowNavbar')
const navbarExpander = document.querySelector('#navbarExpander')
const navLink = document.querySelectorAll('.nav-link')
const searchBar = document.querySelector('#searchBar')
const searchBar2 = document.querySelector('#searchBar2')

// Swiper
// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
// const swiper = new Swiper(...)


navbarExpander.addEventListener('click', ()=>{
    arrowNavbar.classList.toggle('rotateArrow')
    arrowNavbar.classList.toggle('noRotate')
})

navLink.forEach(link => {
    link.addEventListener('click',()=>{
        link.classList.add('active')
        navLink.forEach(el=>{
            if(el!=link)
                el.classList.remove('active')
        })
    })
})

console.log(navLink);

searchBar.addEventListener('click', ()=>{
    console.log('ciaoooo sono la searchBar 1');
})

searchBar2.addEventListener('click', ()=>{
    console.log('ciaoooo sono la searchBar 2');
})
