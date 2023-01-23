const host = 'http://localhost:3500'
// const host = 'https://busy-lime-tortoise-hem.cyclic.app'

//! Fetching products with tag using : GET
async function fetchProduct(tag){
    let res = await fetch(`${host}/api/product/fetch/${tag}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
           
        }
    })
    if(res.ok){
        let data = await res.json();
        return data;
    } else {
        return 'something went wrong.'
    }
}

//! Fetching products and sorting Low to High with tag using : GET
async function fetch_LTH(tag){
    let res = await fetch(`${host}/api/product/fetch_lowToHigh/${tag}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
           
        }
    })
    if(res.ok){
        let data = await res.json();
        return data;
    } else {
        return 'something went wrong.'
    }
}

//! Fetching products and sorting High to Low with tag using : GET
async function fetch_HTL(tag){
    let res = await fetch(`${host}/api/product/fetch_highToLow/${tag}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
           
        }
    })
    if(res.ok){
        let data = await res.json();
        return data;
    } else {
        return 'something went wrong.'
    }
}

//! Fetching products on page with tag using : GET
async function pagination_fetch(tag, page){
    let res = await fetch(`${host}/api/product/fetch/${tag}?page=${page}`, {
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

//! Fetching user using : GET -: Login Requird
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

//! User login using : GET 
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

//! User register using : GET 
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
//!------------| Wishlist |---------// LOGIN REQUIRED

//* Fetching wishlist products : GET 
async function wishlist_fetch(){
    let res = await fetch(`${host}/api/wishlist/fetch`, {
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

//* Fetch wishlist products by ID : POST 
async function wishlist_fetchById(id){
    let res = await fetch(`${host}/api/wishlist/fetchbyid/${id}`, {
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

//* Add wishlist products : POST 
async function wishlist_add(id){
    let data = await wishlist_fetchById(id)
    let res = await fetch(`${host}/api/wishlist/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }, body: JSON.stringify(data)
    })
    if(res.ok){
        return true;
    } else {
        return false;
    }
}
//* Fetching wishlist products : DELETE 
async function wishlist_delete(id){
    let res = await fetch(`${host}/api/wishlist/delete/${id}`,{
        method: "DELETE",
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

//! --------------------- Cart : LOGIN REQUIRED
//* Fetching wishlist products : GET 
async function cart_fetch(){
    let res = await fetch(`${host}/api/cart/fetch`, {
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

//* Fetch cart products by ID : POST 
async function cart_fetchById(id){
    let res = await fetch(`${host}/api/cart/fetchbyid/${id}`, {
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

//* Add cart products : POST 
async function cart_add(id){
    let data = await cart_fetchById(id)
    let res = await fetch(`${host}/api/cart/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }, body: JSON.stringify(data)
    })
    if(res.ok){
        return true;
    } else {
        return false;
    }
}
//* Fetching cart products : DELETE 
async function cart_delete(id){
    let res = await fetch(`${host}/api/cart/delete/${id}`,{
        method: "DELETE",
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


export{userLogin, userRegister, fetchProduct, fetchUser, pagination_fetch, fetch_LTH, fetch_HTL,wishlist_add,wishlist_fetch,wishlist_delete, cart_fetch, cart_add, cart_delete}
// export = userLogin;