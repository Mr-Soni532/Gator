import { fetchProduct, fetch_HTL, fetch_LTH, pagination_fetch, wishlist_add, wishlist_delete } from "./Api_Operations.js";
const user_tag = document.querySelector('#page_title').innerText.toLowerCase();
const token = localStorage.getItem('token');
const login_popup = document.querySelector('#login_required_popup')
//! ----- Headers------------------------

//------------------ offer section - user account

let useraccount = document.querySelector('#user_account');
useraccount.addEventListener('click', () => {
    if (token) {
        // window.location.href = '#'
        alert('Under Construction⚠')
    } else {
        window.location.href = './login.html'
    }
})

//------------------ navigation icons 

let search = document.querySelector('#search')
search.addEventListener('click', () => {
    alert('Under Construction⚠')
})

let wishlist_icon = document.querySelector('#wishlist_icon')
wishlist_icon.addEventListener('click', () => {
    if (token) {
        window.location.href = './wishlist.html'
    } else {
        // window.location.href = './login.html'
    }
})

let cart_icon = document.querySelector('#cart_icon')
cart_icon.addEventListener('click', () => {
    if (token) {
        window.location.href = './cart.html'
    } else {
        window.location.href = './login.html'
    }
})

//--------- username

let username = document.querySelector('#nav_username');
username.innerText = localStorage.getItem('username') || 'My Account';

//--------- product_like icon 

function heart_icon_action(){
    let like_btns = document.querySelectorAll('.fa-heart')
like_btns.forEach(el => {
    el.addEventListener('click', () => {
        if (token) {
            if (el.classList.contains('fa-regular')) {
                el.classList.remove('fa-regular')
                el.classList.add('fa-solid')
                el.setAttribute('style', 'color:#97c243;opacity:1')
                let product_id = el.parentElement.parentElement.parentElement.id;
                wishlist_add(product_id)
            } else {
                el.setAttribute('style', 'color:#000000;opacity:0.2')
                el.classList.remove('fa-solid')
                el.classList.add('fa-regular')
                let product_id = el.parentElement.parentElement.parentElement.id;
                // wishlist_add(product_id)
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
}


//-------------- left filter section

const plus_icons = document.querySelectorAll('.fa-plus');
plus_icons.forEach(el => {
    el.addEventListener('click', () => {
        // close all open dropdowns
        plus_icons.forEach(element => {
            element.classList.remove('filter_dropdown_active')
        })
        // el.classList.add('filter_dropdown_active')
        el.parentElement.nextElementSibling.classList.toggle('filter_dropdown_active')
    })
})




//--------------- top sort dropdown

let sort = document.querySelector('#sort_btn')
sort.addEventListener('click', () => {
    document.querySelector('.sort_dropdown').classList.toggle('sort_dropdown_active')
})

//* ---------------- left price range bar

let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

function setLeftValue() {
    let _this = inputLeft;
    let min = parseInt(_this.min);
    let max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 2);
    let percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    displayValOne.textContent = parseInt(_this.value);
}

setLeftValue();
function setRightValue() {
  let _this = inputRight
    let min = parseInt(_this.min);
  let max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 2);
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  displayValTwo.textContent = parseInt(_this.value);
}

setRightValue();
inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

// //! Active effect for left thumb

inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

// //! Active effect for Right thumb

inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});

// ---------------------------- main product injection ------
const main_section = document.querySelector('.ms_c2_container')
function fetchAll(){
    let res = fetchProduct(user_tag);
    displayProduct(res)
}
fetchAll()

// ----------------- Displaying all products 

function displayProduct(data){
   data.then(products => {
    main_section.innerHTML = ""
     main_section.innerHTML = products.map(el => {
        return `
        <div class="product_card" id="${el._id}">
                    <div>
                        <span><i class="fa-regular fa-heart"></i></span>
                        <span id="new_tag">${el.new}</span>
                    </div>
                    <img src=${el.img} alt="product" id="product_img">
                    <span id="product_title">${el.title}</span>
                    <div class="product_card_price range_price ${el.price===""?'range_price_active':""}">
                        <span>₹<span id="price_start">${el.range_start}</span></span> to <span>₹<span
                                id="price_end">${el.range_end}</span></span>
                    </div>
                    <div class="product_card_price fixed_price ${el.price?'fixed_price_active':""}">
                        <span>₹<span id="fixed_price">1,971</span></span>
                    </div>
                </div>
        `
    }).join(" ")
   })
   setTimeout(() => {
       heart_icon_action()
   }, 2000);
}

// ----------------- Paggination 

const pagination_btns = document.querySelectorAll('#pagination_container>span');

pagination_btns.forEach(el => {
    el.addEventListener('click', ()=>{
        pagination_btns.forEach(elem =>{
            elem.classList.remove('active_pagination')
        })
        el.classList.add('active_pagination')
        let res = pagination_fetch(user_tag,el.id);
        window.scrollTo(0,0)
        displayProduct(res)
    })
})

// ------------ sort

const sort_HTL = document.querySelector('#highToLow');
sort_HTL.addEventListener('click', ()=>{
    let res = fetch_HTL(user_tag);
    displayProduct(res)
})
const sort_LTH = document.querySelector('#lowToHigh')
sort_LTH.addEventListener('click', ()=>{
    let res = fetch_LTH(user_tag);
    displayProduct(res)
})