
const token = localStorage.getItem('token')
let username = document.querySelector('#username');
const userDetails = JSON.parse(localStorage.getItem('userDetails'));
username.innerText = userDetails.name.toUpperCase() || 'My Account';

let signout = document.querySelector('#signout')
signout.addEventListener('click', () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userDetails')
    localStorage.removeItem('bill_amount')
    localStorage.removeItem('address_details')
    window.location.href = '../html/login.html'
})

let cart_icon = document.querySelector('#cart_icon')
cart_icon.addEventListener('click', () => {
    console.log('yes')
    if (token) {
        window.location.href = '../html/cart.html'
    } else {
        window.location.href = '../html/login.html'
    }
})

// --------------------------

let profile = document.querySelector('#profile');
profile.addEventListener('click', ()=>{
    window.location.href = './account.html'
})
let wishlist_card = document.querySelector('#wishlist_card');
wishlist_card.addEventListener('click', ()=>{
    window.location.href = './wishlist.html'
})

//-------------------------
document.querySelector('#account_email').innerText = userDetails.email;
document.querySelector('#account_name').innerText = userDetails.name.toUpperCase();
document.querySelector('#account_mobile').innerText = userDetails.number;
