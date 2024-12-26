document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        mousewheel: {
            releaseOnEdges: true,
            sensitivity: 1,
        },
        speed: 1700,
        freeModeMomentum: true,
        freeModeMomentumBounce: false,
    });
});