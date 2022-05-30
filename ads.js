
//Query selectors
const arrowNavbar = document.querySelector('#arrowNavbar')
const navbarExpander = document.querySelector('#navbarExpander')
const navLink = document.querySelectorAll('.nav-link')
const searchBar = document.querySelector('#searchBar')
const searchBar2 = document.querySelector('#searchBar2')
const heartBtn = document.querySelectorAll('#heartBtn')
const cartBtn = document.querySelectorAll('#cartBtn')
const adsWrapper = document.querySelector('#adsWrapper');
const footerCategoriesListItems = document.querySelectorAll('#footerCategoriesListItem')
const footerCategoriesListIcons = document.querySelectorAll('#footerCategoriesListIcon')
const footerInfoListItems = document.querySelectorAll('#footerInfoListItem')
const footerInfoListIcons = document.querySelectorAll('#footerInfoListIcon')


fetch('./annunci.json')
.then(response=>response.json())
.then(data=>{

    // Inserire in una funzione il foreach?? (da lanciare all'interno del fetch)

    data.forEach((ad,i)=>{

        let adElement = document.createElement('div')
        adElement.classList.add('col-12','col-sm-6','col-md-4','col-lg-3', 'm-4', 'd-flex', 'justify-content-center', 'px-0')

        if(i>=(data.length-10)){
            adElement.innerHTML=`
                <div class="card d-flex align-items-center productCard" style="width: 18rem;">
                    <span class="badge typeBadge ${ad.type == 'sell' ? 'back-colorRed' : 'back-colorGreen'}">${ad.type == 'sell' ? 'Selling' : 'Searching'}</span>
                    <span class="badge newBadge">NEW</span>
                    <img class="card-img-top" src="https://technext.github.io/electro/img/shop01.png" alt="Immagine smartphone">
                    <div class="card-body py-1">
                        <p class="card-title productCategory text-center mt-3">${ad.category}</p>
                        <a href="#"><p class="card-text productName text-center">${ad.name}</p></a>
                        <p class="text-center secColor fw-bold fs-5 mt-2 mb-0">${ad.price} $</p>
                    </div>
                    <div class="row mb-2 py-2 w-100 justify-content-around">
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                            <button id="heartBtn" class="">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                            <button id="cartBtn" class="">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `
        }else{
            adElement.innerHTML=`
                <div class="card d-flex align-items-center productCard" style="width: 18rem;">
                    <span class="badge typeBadge ${ad.type == 'sell' ? 'back-colorRed' : 'back-colorGreen'}">${ad.type == 'sell' ? 'Selling' : 'Searching'}</span>
                    <img class="card-img-top" src="https://technext.github.io/electro/img/shop01.png" alt="Immagine smartphone">
                    <div class="card-body py-1">
                        <p class="card-title productCategory text-center mt-3">${ad.category}</p>
                        <a href="#"><p class="card-text productName text-center">${ad.name}</p></a>
                        <p class="text-center secColor fw-bold fs-5 mt-2 mb-0">${ad.price} $</p>
                    </div>
                    <div class="row mb-2 py-2 w-100 justify-content-around">
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                            <button id="heartBtn" class="">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                            <button id="cartBtn" class="">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `
        }
        
        adsWrapper.appendChild(adElement)
    })
})


// Event listeners


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

searchBar.addEventListener('click', ()=>{
    console.log('ciaoooo sono la searchBar 1'); ///ovviamente modificare
})

searchBar2.addEventListener('click', ()=>{
    console.log('ciaoooo sono la searchBar 2'); ///ovviamente modificare
})

heartBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('back-sec')
        btn.children[0].classList.toggle('colorWhite')
    })
})

footerCategoriesListItems.forEach((li,i)=>{
    li.addEventListener('mouseenter', ()=>{
        footerCategoriesListIcons[i].classList.remove('d-none')
        footerCategoriesListIcons[i].classList.add('d-block')
    })
})

footerCategoriesListItems.forEach((li,i)=>{
    li.addEventListener('mouseleave', ()=>{
        footerCategoriesListIcons[i].classList.add('d-none')
        footerCategoriesListIcons[i].classList.remove('d-block')
    })
})

footerInfoListItems.forEach((li,i)=>{
    li.addEventListener('mouseenter', ()=>{
        footerInfoListIcons[i].classList.remove('d-none')
        footerInfoListIcons[i].classList.add('d-block')
    })
})

footerInfoListItems.forEach((li,i)=>{
    li.addEventListener('mouseleave', ()=>{
        footerInfoListIcons[i].classList.add('d-none')
        footerInfoListIcons[i].classList.remove('d-block')
    })
})