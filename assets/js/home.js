
const heroSlider = new Swiper('.hero-slider', {
    direction: 'horizontal',
    speed: 400,
    slidesPerView: 1,
    autoHeight: false,
    effect: 'slide',
    // Distance between slides in px.
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    paginationType: "bullets",
})

// const followSlider = new Swiper('.follow-slider', {
//     // Default parameters
//     slidesPerView: 1,
//     spaceBetween: 0,
//     // Responsive breakpoints
//     breakpoints: {
//         // when window width is >= 320px
//         576: {
//             slidesPerView: 2,
//         },
//         // when window width is >= 480px
//         760: {
//             slidesPerView: 3,
//         },
//         // when window width is >= 640px
//         980: {
//             slidesPerView: 4,
//         },
//         1024: {
//             slidesPerView: 5,
//         }
//     }
// }) 
