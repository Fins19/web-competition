// fixed blur navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// hamburger menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// initialized swiper js
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    pagination: {
        el: '.swiper-pagination',
    },
});