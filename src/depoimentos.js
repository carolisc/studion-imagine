new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    loop: true,
    grabCursor: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1000,
});