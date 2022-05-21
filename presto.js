
//Problems to be solved
// 1- heart gets covered by its background after click (??)
// 2- add an initial section with a quick website description

//Query selectors
const arrowNavbar = document.querySelector('#arrowNavbar')
const navbarExpander = document.querySelector('#navbarExpander')
const navLink = document.querySelectorAll('.nav-link')
const searchBar = document.querySelector('#searchBar')
const searchBar2 = document.querySelector('#searchBar2')
const heartBtn = document.querySelectorAll('#heartBtn')
const cartBtn = document.querySelectorAll('#cartBtn')
const categoriesText = document.querySelector('#categoriesText')
const easterEggToastMessage = document.querySelector('#easterEggToastMessage')

// Variables
var easterEggCounter = 0;

//Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //breakpoints
    breakpoints: {
        700: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    }
    
    // And if we need scrollbar
    // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
});

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

heartBtn.forEach(btn=>{
    btn.addEventListener('mouseenter', ()=>{
        btn.innerHTML=''
        btn.innerHTML=`<i class="fa-solid fa-heart"></i>`
    })  
})

heartBtn.forEach(btn=>{
    btn.addEventListener('mouseleave', ()=>{
        btn.innerHTML=''
        btn.innerHTML=`<i class="fa-regular fa-heart"></i>`
    })  
})

heartBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('back-sec')
    })  
})

//Functions
function displayToastMessage(message){
    let toast = document.createElement('div')
    toast.classList.add('d-flex')
    toast.innerHTML=`
        <div class="toast-body">
            ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
        </button>
      `
    easterEggToastMessage.innerHTML=''
    easterEggToastMessage.appendChild(toast);
}

//Easter Egg

categoriesText.addEventListener('click', ()=>{
    easterEggCounter++;
    console.log('toast');
    console.log(easterEggToastMessage);
    if(easterEggCounter>=10){
        displayToastMessage('Stop pushing that button! :)')
        easterEggToastMessage.classList.add('fade','show')
    }else if(easterEggCounter==5){
        displayToastMessage('Hey! You just found an easter egg! :)')
        easterEggToastMessage.classList.add('fade','show')
    }
})