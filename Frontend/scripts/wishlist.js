import { cart_add, wishlist_delete, wishlist_fetch } from "./Api_Operations.js";
const token = localStorage.getItem('token')
let username = document.querySelector('#username');
username.innerText = JSON.parse(localStorage.getItem('userDetails')).name.toUpperCase() || 'My Account';

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


let main_seciton = document.querySelector('.wishlist_container')
function remove_wishlist_item() {
    const removeItems = document.querySelectorAll('#removeItem');
    removeItems.forEach(el => {
        el.addEventListener('click', (e) => {
            let ID = e.target.parentElement.id
            // console.log(ID)
            wishlist_delete(ID)
            setTimeout(() => {
                fetch_wishlist()
            }, 2000);
        })
    })
}

function add_wishlist_item_toCart() {
    const addToCart_btns = document.querySelectorAll('#addtocart');
    addToCart_btns.forEach(el => {
        el.addEventListener('click', () => {
            let ID = el.parentElement.id;
            cart_add(ID);
        })
    })
}

fetch_wishlist()
function fetch_wishlist() {
    let res = wishlist_fetch()
    display_wishlist(res)
}

function display_wishlist(data) {
    data.then(products => {
        document.querySelector('#item_count').innerText = products.length;

        main_seciton.innerHTML = products.map(el => {
            return `
            <div class="wishlist_card" id=${el._id}>
            <i class="fa-solid fa-circle-xmark" id="removeItem"></i>
            <div>
                <img src="${el.img}" alt="">
            </div>
            <div>
                <p id="product_title">${el.title.slice(0, 25)}</p>
                <div class="product_card_price range_price ${el.price === "" ? 'range_price_active' : ""}" >
                    <span>₹<span id="price_start">${el.range_end}</span></span>
                </div>
                <div class="product_card_price fixed_price ${el.price ? 'fixed_price_active' : ""}" >
                    <span>₹<span id="fixed_price">${el.price}</span></span>
                </div>
            </div>
            <button id="addtocart">ADD TO CART</button>
        </div>
            `
        }).join("")
    })
    setTimeout(() => {
        remove_wishlist_item();
        add_wishlist_item_toCart();
    }, 2000);
}


// --------------------------

let profile = document.querySelector('#profile');
profile.addEventListener('click', ()=>{
    window.location.href = './account.html'
})
let wishlist_card = document.querySelector('#wishlist_card');
wishlist_card.addEventListener('click', ()=>{
    window.location.href = './wishlist.html'
})