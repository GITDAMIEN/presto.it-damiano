const arrowNavbar = document.querySelector('#arrowNavbar')
const navbarExpander = document.querySelector('#navbarExpander')

navbarExpander.addEventListener('click', ()=>{
    arrowNavbar.classList.toggle('rotateArrow')
})