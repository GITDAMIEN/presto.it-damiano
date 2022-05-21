//Query selectors
const arrowNavbar = document.querySelector('#arrowNavbar')
const navbarExpander = document.querySelector('#navbarExpander')
const navLink = document.querySelectorAll('.nav-link')
const searchBar = document.querySelector('#searchBar')
const searchBar2 = document.querySelector('#searchBar2')
const heartBtn = document.querySelector('#heartBtn')
const cartBtn = document.querySelector('#cartBtn')

// Variables


//Problems to be solved
// 1- heart gets covered by its background after click (??)
// 2- add an initial section with a quick website description


//Event listeners

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

heartBtn.addEventListener('mouseenter', ()=>{
    heartBtn.innerHTML=''
    heartBtn.innerHTML=`<i class="fa-solid fa-heart"></i>`
})

heartBtn.addEventListener('mouseleave', ()=>{
    heartBtn.innerHTML=''
    heartBtn.innerHTML=`<i class="fa-regular fa-heart"></i>`
})

heartBtn.addEventListener('click', ()=>{
    heartBtn.classList.toggle('back-sec')
})