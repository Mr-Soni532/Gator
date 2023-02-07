import { cart_deleteAll } from "./Api_Operations.js";
import { disable_loading } from "./navbar.js";

let bill = localStorage.getItem('bill_amount')
document.querySelector('#subtotal').innerText = bill;
document.querySelector('#etotal').innerText = bill;

let details = JSON.parse(localStorage.getItem('address_details'));

document.querySelector('#email').innerText = details.email
document.querySelector('#name').innerText = details.firstname + " " + details.lastname;
document.querySelector('#phone').innerText = details.phone
document.querySelector('#address').innerText = details.address
document.querySelector('#outer_address').innerText =
    `${details.state},${details.zip_code},${details.country}`

let order_btn = document.querySelector('#placeOrder');
order_btn.addEventListener('click', () => {
    alert('💹 Your Order has been placed.\n Keep Shopping🎉')
    localStorage.removeItem('bill_amount')
    localStorage.removeItem('address_details')
    cart_deleteAll()
    disable_loading()
    setTimeout(() => {
        window.location.href = '../index.html'
    }, 1000);
})
let wishlist_icon = document.querySelector('#wishlist_icon')
wishlist_icon.addEventListener('click', () => {
    window.location.href = '../html/wishlist.html'
})
const username = JSON.parse(localStorage.getItem('userDetails')).name
document.querySelector('#username').innerText = username;