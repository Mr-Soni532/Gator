import { active_loading, disable_loading } from "./navbar.js";

// const host = 'http://localhost:5000'
const host = 'https://determined-eel-wear.cyclic.app'
//! Fetching products with tag using : GET
async function fetchProduct(tag) {
    active_loading()
    let res = await fetch(`${host}/api/product/fetch/${tag}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'

        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        return 'something went wrong.'
    }
}
//! Fetching products by id using : GET
async function fetchProduct_byId(id) {
    let res = await fetch(`${host}/api/product/fetchbyid/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok) {
        let data = await res.json();
        console.log(data)
        return data;
    } else {
        return 'something went wrong.'
    }
}

//! Fetching products and sorting Low to High with tag using : GET
async function fetch_LTH(tag) {
    active_loading()
    let res = await fetch(`${host}/api/product/fetch_lowToHigh/${tag}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'

        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        return 'something went wrong.'
    }
}

//! Fetching products and sorting High to Low with tag using : GET
async function fetch_HTL(tag) {
    active_loading()
    let res = await fetch(`${host}/api/product/fetch_highToLow/${tag}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'

        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        return 'something went wrong.'
    }
}

//! Fetching products on page with tag using : GET
async function pagination_fetch(tag, page) {
    active_loading()
    let res = await fetch(`${host}/api/product/fetch/${tag}?page=${page}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        return 'something went wrong.'
    }
}

//! Fetching user using : GET -: Login Requird
async function fetchUser() {
    active_loading()
    let res = await fetch(`${host}/api/user/fetchuser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        return 'something went wrong.'
    }
}

//! User login using : GET 
async function userLogin(data) {
    active_loading()
    let res = await fetch(`${host}/api/user/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(res)
    if (res.ok) {
        disable_loading()
        let data = await res.json();
        return data;
    } else {
        disable_loading()
        return false
    }
}

//! User register using : GET 
async function userRegister(data) {
    active_loading()
    let res = await fetch(`${host}/api/user/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (res.ok) {
        disable_loading()
        return true;
    } else {
        disable_loading()
        return false;
    }
}
//!------------| Wishlist |---------// LOGIN REQUIRED

//* Fetching wishlist products : GET 
async function wishlist_fetch() {
    active_loading()
    let res = await fetch(`${host}/api/wishlist/fetch`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        console.log('something went wrong.')
    }
}

//* Add wishlist products : POST 
async function wishlist_add(id) {
    let data = await fetchProduct_byId(id)
    let res = await fetch(`${host}/api/wishlist/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }, body: JSON.stringify(data)
    })
    console.log(data)
    if (res.ok) {
        return true;
    } else {
        return false;
    }
}
//* Deleting wishlist products : DELETE 
async function wishlist_delete(id) {
    active_loading()
    let res = await fetch(`${host}/api/wishlist/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        console.log('something went wrong.')
    }
}

//! --------------------- Cart : LOGIN REQUIRED
//* Fetching wishlist products : GET 
async function cart_fetch() {
    active_loading()
    let res = await fetch(`${host}/api/cart/fetch`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        return 'something went wrong.'
    }
}


//* Add cart products : POST 
async function cart_add(id) {
    active_loading()
    let data = await fetchProduct_byId(id)
    let res = await fetch(`${host}/api/cart/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }, body: JSON.stringify(data)
    })
    if (res.ok) {
        disable_loading()
        return true;
    } else {
        disable_loading()
        return false;
    }
}
//* Fetching cart products : DELETE 
async function cart_delete(id) {
    active_loading()
    let res = await fetch(`${host}/api/cart/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
    if (res.ok) {
        let data = await res.json();
        disable_loading()
        return data;
    } else {
        disable_loading()
        return 'something went wrong.'
    }
}
//* Delete cart products : DELETE ALL
async function cart_deleteAll() {
    active_loading()
    await fetch(`${host}/api/cart/deleteAll`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    })
}


export { userLogin, userRegister, fetchProduct, fetchUser, pagination_fetch, fetch_LTH, fetch_HTL, wishlist_add, wishlist_fetch, wishlist_delete, cart_fetch, cart_add, cart_delete,cart_deleteAll }
// export = userLogin;