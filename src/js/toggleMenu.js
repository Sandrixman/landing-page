document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.header__hamburger-menu');
    const images = document.querySelectorAll(".header__hamburger-menu img");
    const menu = document.querySelector(".mobile-menu");
    const navItems = document.querySelectorAll(".nav__item");
    let isMenuActive = false;

    btn.addEventListener('click', function () {
        isMenuActive = !isMenuActive;
        document.body.style.overflow = isMenuActive ? "hidden" : "auto";

        menu.classList.toggle("active");

        images.forEach(function (img) {
            img.classList.toggle("active");
        });
    });

    navItems.forEach(function(item) {
        item.addEventListener("click", function () {
            document.body.style.overflow = "auto";

            menu.classList.remove("active");

            images.forEach(function (img) {
                img.classList.toggle("active");
            });
        });
    });
})
