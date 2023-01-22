import { fetchUser, userLogin } from "./Api_Operations.js";

userLogin
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = {
        email: form.email.value,
        password: form.password.value
    }
    let res = userLogin(data);
    res.then(data => {
        localStorage.setItem('token', data.token)
        let res = fetchUser();
        res.then(data => {
            let {email,name, number} = data;
            let obj = {
                email, name, number
            }
            localStorage.setItem('userDetails', JSON.stringify(obj))
        })
    })
})

