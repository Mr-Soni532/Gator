const nav_username = document.querySelector('#nav_username');
nav_username.innerText = JSON.parse(localStorage.getItem('userDetails'))?.name || 'MY ACCOUNT'
const Loader_icon_container = document.querySelector('#Loader_icon_container')

const active_loading = () => {
    Loader_icon_container.innerHTML = `
    <div class = "loading_gear">
        <lord-icon
        src="https://cdn.lordicon.com/cbyzfqag.json"
        trigger="loop"
        colors="outline:#fff,primary:#66ee78,secondary:#ffffff"
        stroke="50"
        style="width:250px;height:250px">
        </lord-icon>
    </div>
    `
}
const disable_loading = () => {
    Loader_icon_container.innerHTML = ""
}
export{active_loading,disable_loading}