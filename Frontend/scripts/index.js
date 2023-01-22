const token = localStorage.getItem('token');
const login_popup = document.querySelector('#login_required_popup')
//! ----- Headers--------
// offer section - user account
let useraccount = document.querySelector('#user_account');
useraccount.addEventListener('click', () => {
    if (token) {
        // window.location.href = '#'
        alert('Under Construction⚠')
    } else {
        window.location.href = './html/login.html'
    }
})
// navigation icons 

let search = document.querySelector('#search')
search.addEventListener('click', () => {
    alert('Under Construction⚠')
})
let wishlist_icon = document.querySelector('#wishlist_icon')
wishlist_icon.addEventListener('click', () => {
    if (token) {
        window.location.href = './html/wishlist.html'
    } else {
        // window.location.href = './html/login.html'
    }
})
let cart_icon = document.querySelector('#cart_icon')
cart_icon.addEventListener('click', () => {
    if (token) {
        window.location.href = './html/cart.html'
    } else {
        window.location.href = './html/login.html'
    }
})

//--------- username
let username = document.querySelector('#nav_username');
username.innerText = localStorage.getItem('username') || 'My Account';

//--------- wishlist 
let like_btns = document.querySelectorAll('.fa-heart')
like_btns.forEach(el => {
    el.addEventListener('click', () => {
        if (token) {
            if (el.classList.contains('fa-regular')) {
                el.classList.remove('fa-regular')
                el.classList.add('fa-solid')
                el.setAttribute('style', 'color:#97c243;opacity:1')
                // add to wish-list
            } else {
                el.setAttribute('style', 'color:#000000;opacity:0.2')
                el.classList.remove('fa-solid')
                el.classList.add('fa-regular')
                // delete from wish-list
            }
        } else {
            login_popup.classList.add('login_required_card_active')
        }
    })
})

//------ login_popup
let remove_popup = document.querySelectorAll('#remove_login_required_card');
remove_popup.forEach(el => {
    el.addEventListener('click', () => [
        login_popup.classList.remove('login_required_card_active')
    ])
})

// ----------- carousel-------------
let carousel_track = document.querySelector('.carousel_track');
let carousel_container = document.querySelector('.carousel_container');
let prev_slide = document.querySelector('#prev_slide');
prev_slide.addEventListener('click', moveToPrevSlide)
let next_slide = document.querySelector('#next_slide');
next_slide.addEventListener('click', moveToNextSlide)
let index = 0;

const slideWidth = carousel_container.clientWidth;
function moveSlide(index) {
    carousel_track.style.transform = `translateX(-` + slideWidth * index + `px)`;
}

function moveToNextSlide() {
    if (index < 2) {
        moveSlide(++index)
        console.log('front', index)
        // index++
        prev_slide.setAttribute('style', 'opacity: 1')
        if(index == 2)
        next_slide.setAttribute('style', 'opacity: 0.3')
    } else {
    }
}
function moveToPrevSlide() {
    if (index >= 1) {
        // index-=1;
        moveSlide(--index)
        console.log('back', index)
        next_slide.setAttribute('style', 'opacity: 1')
       
        if(index == 0)
        prev_slide.setAttribute('style', 'opacity: 0.3')
    } else {
    }
}