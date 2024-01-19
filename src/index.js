$(document).ready(() => {
    // SWIPER ---------------------------
    new Swiper('.swiper', {
        // Optional parameters
        autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
        },
        loop: true,
        grabCursor: true,
        pagination: {
            enabled: false,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1000,
    });
    //----------------------------------

    // COUNTER ----------------------------

    $(".counter__number").counterUp({
        delay: 10,
        time: 2000,
    });

    const numbersCollection = document.querySelectorAll(".counter__number");
    numbersCollection.forEach((number) => {
        setInterval(() => {
            const currentNumber = parseInt(number.innerHTML);
            number.innerHTML = currentNumber + 1;
        }, (((Math.random() * 10) + 1) * 1000));
    })

    //-------------------------------------
});

