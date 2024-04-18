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

    // And if we need scrollbar

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
    slidesPerView: 3,
    spaceBetween: 20,
    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.blog__button-next',
        prevEl: '.blog__button-prev',
    },

    // And if we need scrollbar

});