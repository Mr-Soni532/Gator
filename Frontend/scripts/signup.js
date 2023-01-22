import { userRegister } from "./Api_Operations.js";
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = {
        name: form.firstname.value+" "+form.lastname.value,
        email: form.email.value,
        password: form.password.value,
        number: form.mobile.value
    }
    console.log(data)
    if(data.password === form.cpassword.value){
        let res = userRegister(data);
        res.then(result => {
            if(result){
                window.location.href = "../html/login.html"
            } else {
                alert('Input Valid Details')
            }
        })
    } else {
        console.log('password not matching')
    }
})

