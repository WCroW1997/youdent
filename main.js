let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.nav');
let lock = document.querySelector('body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    lock.classList.toggle('lock');
})

const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },

    }


});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    // And if we need scrollbar

});

const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,

    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.blog__button-next',
        prevEl: '.blog__button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1240: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }

});