//! ----- navigation--------

//--------- username
let username = document.querySelector('#nav_username');
username.innerText = localStorage.getItem('username') || 'My Account';

//--------- username
