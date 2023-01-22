const host = 'http://localhost:3500'
async function fetchProduct(tag){
    let res = await fetch(`${host}/api/product/fetch/${tag}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if(res.ok){
        let data = await res.json();
        return data;
    } else {
        return 'something went wrong.'
    }
}
async function fetchUser(){
    let res = await fetch(`${host}/api/user/fetchuser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if(res.ok){
        let data = await res.json();
        return data;
    } else {
        return 'something went wrong.'
    }
}

async function userLogin(data){
    let res = await fetch(`${host}/api/user/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if(res.ok){
        let data = await res.json();
        return data;
    } return 'Something went wrong'
}

async function userRegister(data){
    let res = await fetch(`${host}/api/user/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if(res.ok){
        return true;
    } else {
        return false;
    }
}

export{userLogin, userRegister, fetchProduct, fetchUser}
// export = userLogin;