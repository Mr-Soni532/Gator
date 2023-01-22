const { userLogin } = require("./Api_Operations");

userLogin
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = {
        email: form.email.value,
        password: form.password.value
    }
    let res = userLogin(data);
    console.log(res)
})