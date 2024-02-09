document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll('.animateElement');

    function elementAnimation(elem) {
        const rect = elem.getBoundingClientRect();
        const elemTop = rect.top;
        const elemHeight = rect.height;

        return (elemTop - elemHeight) < window.innerHeight;
    }

    function handleScroll() {
        animateElements.forEach((element) => {
            if (elementAnimation(element)) {
                    element.classList.add('slide-up');
            }
        });
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
