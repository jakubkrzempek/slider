import "../scss/style.scss";
document.addEventListener('DOMContentLoaded', () => {
    const sliderEl = document.querySelector('.slider');

    const img1El = document.querySelector('.slider__img_container_first .slider__img');
    const img2El = document.querySelector('.slider__img_container_second .slider__img');
    const img2ContEl = document.querySelector('.slider__img_container_second');
    const handlerEl = document.querySelector(".slider__handler");
    const arrowsEl = document.querySelector('.slider__arrows');
    let sliderWidth;
    let sliderLeftOffset;
    let dragging = false;

    function getOffset(clientX) {
        clientX = clientX - sliderLeftOffset
        if (clientX > sliderWidth) return sliderWidth;
        if (clientX < 0) return 0;
        return clientX;
    }

    function move(clientX) {

        const offset = getOffset(clientX);
        const percent = offset / sliderWidth * 100;
        console.log(percent);
        handlerEl.style.left = percent + "%";
        img2ContEl.style.width = percent + "%";

    }

    function initEvents() {
        arrowsEl.addEventListener('mousedown', () => {
            dragging = true;

        })

        arrowsEl.addEventListener('mouseup', () => {
            dragging = false;

        })

        arrowsEl.addEventListener('touchstart', () => {
            dragging = true;

        })

        arrowsEl.addEventListener('touchend', () => {
            dragging = false;

        })

        window.addEventListener('touchmove', (e) => {
            if (dragging) {
                move(e.touches[0].clientX);
            }
        })



        window.addEventListener('mousemove', (e) => {
            if (dragging) {
                move(e.clientX);
            }
        })

        window.addEventListener('mouseup', (e) => {

            dragging = false;

        })

    }

    function changeWidth() {

        sliderWidth = sliderEl.offsetWidth;
        sliderLeftOffset = sliderEl.offsetLeft;

        img1El.style.width = sliderWidth + "px";
        img2El.style.width = sliderWidth + "px";
    }

    window.addEventListener('resize', changeWidth);

    changeWidth();
    initEvents();
})