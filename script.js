const sliderButtons = document.querySelector('.header__background--slider');
const sliderAllCircles = document.querySelectorAll('.header__background--slider-circle');
const sliderItems = document.querySelectorAll('.header__background--item');

sliderButtons.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('header__background--slider-circle')) {
        sliderAllCircles.forEach(circle => {
            circle.classList.remove('current-slide');
        });

        element.classList.add('current-slide');

        sliderItems.forEach(item => {
            item.style.transform = `translateX(${-100 * element.dataset.slide}%)`;
        });
    }

});