
    let bill = localStorage.getItem('bill_amount')
    document.querySelector('#subtotal').innerText = bill;
    document.querySelector('#etotal').innerText = bill;

let form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let obj = {
        email: form.email.value,
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        country: form.country.value,
        address: form.address.value,
        state: form.state.value,
        zip_code: form.zip_code.value,
        phone: form.phone.value,
    }
    localStorage.setItem('address_details', JSON.stringify(obj))
    window.location.href = '../html/review.html'
})
let wishlist_icon = document.querySelector('#wishlist_icon')
wishlist_icon.addEventListener('click', () => {
   
        window.location.href = '../html/wishlist.html'
  
})