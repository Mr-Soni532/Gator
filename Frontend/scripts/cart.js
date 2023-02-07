import { cart_delete, cart_fetch } from "./Api_Operations.js"

let main_section = document.querySelector(".cart_products");

let wishlist_icon = document.querySelector('#wishlist_icon')
wishlist_icon.addEventListener('click', () => {
   
        window.location.href = '../html/wishlist.html'
  
})

let proceedToCheckout_btn = document.querySelector('#proceedToCheckout');
proceedToCheckout_btn.addEventListener('click', ()=>{
    window.location.href = '../html/checkout.html'
}) 


// ---------------- cart main funcitonality ----------
function displayCartItem(data) {
    data.then(items => {
        main_section.innerHTML = items.map(el => {
            return `
            <div class="cart_product_card" id="${el._id}">
            <div>
                <div class="product_img">
                    <img src="${el.img}" alt="">
                </div>
                <div class="product_title">
                    <h2 id="title">${el.title}</h2>
                    <p>Size: <span id="size">M2/W4</span></p>
                </div>
                <div class="product_quantity">
                    <div>
                        <i class="fa-solid fa-circle-minus" id="subtract_btn"></i>
                        <div id="quantity">
                            1
                        </div>
                        <i class="fa-solid fa-circle-plus" id="add_btn"></i>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span>
                        <i class="fa-regular fa-heart"></i>
                        <a id="add_to_wishlist"><u>Move to wishlist</u></a>
                    </span>
                    <span>
                        <i class="fa-solid fa-trash"></i>
                        <a id="remove_item"><u>Remove from cart</u></a>
                    </span>
                </div>
                <div>₹<span id="item_price">${el.price?el.price:el.range_end}</span></div>
            </div>
        </div>
            `
        }).join("")
    })
    setTimeout(() => {
        removeCartItem()
        decrease_count()
        increase_count()
        update_total_price()
    }, 1000);
}
fetch()

 function fetch(){
    let res =  cart_fetch();
    displayCartItem(res)
}

function removeCartItem(){
    let removeItem_btns = document.querySelectorAll('#remove_item');
    removeItem_btns.forEach(el =>{
        el.addEventListener('click', ()=>{
            let ID = el.parentElement.parentElement.parentElement.parentElement.id;
            cart_delete(ID);
            setTimeout(() => {
                fetch()
            }, 500);
        })
    })
}

function update_total_price(){
    let item_prices = document.querySelectorAll('#item_price')
    let count = 0;
    item_prices.forEach(el => {
        count += +el.innerText.split(",").join("")
    })
    document.querySelector('#subtotal').innerText = count;
    document.querySelector('#etotal').innerText = count;
    localStorage.setItem('bill_amount', count)
}

function decrease_count(){
    const sub_btns = document.querySelectorAll('#subtract_btn');
    sub_btns.forEach(el => {
        el.addEventListener('click', (e)=>{
            let item_price= e.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0]
            let price = +item_price.innerText.split(",").join("");
            let quantity = el.nextSibling.nextSibling;
            let count = +el.nextSibling.nextSibling.innerText;
            quantity.innerText = count-1 <= 0 ? 1 : count-1;
            if(count<=1) count = 0;
            item_price.innerText = price- Math.floor((price/count)==Infinity? 0 : (price/count))
            update_total_price()
        })
    })
}


function increase_count(){
    const sub_btns = document.querySelectorAll('#add_btn');
    sub_btns.forEach(el => {
        el.addEventListener('click', (e)=>{
            let item_price= e.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0]
           let price = +item_price.innerText.split(",").join("");
            let quantity = el.previousSibling.previousSibling;
            let count = +el.previousSibling.previousSibling.innerText;
            quantity.innerText = count+1;
          
            item_price.innerText = price+ Math.floor(price/count)
            update_total_price()
        })
    })
}