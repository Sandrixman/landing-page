const swiper = new Swiper(".swiper", {
    direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 32,
    grabCursor: true,
    slideActiveClass: "active",
    autoplay: {
        enabled: true,
        delay: 5000
    },
    mousewheel: true,
    slidesOffsetBefore: 90,
    speed: 1000
});

swiper.on('reachBeginning', function () {
    window.scrollTo({
        top: window.scrollY - 300,
        behavior: 'smooth'
    });
});

swiper.on('reachEnd', function () {
    const element = document.getElementById('testimonial');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
