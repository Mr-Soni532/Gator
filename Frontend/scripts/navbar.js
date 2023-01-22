const nav_username = document.querySelector('#nav_username');
nav_username.innerText = JSON.parse(localStorage.getItem('userDetails')).name