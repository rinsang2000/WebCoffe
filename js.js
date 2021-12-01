var navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}

var searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = function(){
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    carItem.classList.remove('active');
}

var carItem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick = function(){
    carItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = function(){
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}