const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider-item:first-child");
const lastSlide = document.querySelector(".slider-item:last-child");

function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        }else{
            firstSlide.classList.add(SHOWING_CLASS);
        }
    }else{
        firstSlide.classList.add(SHOWING_CLASS);
    }

}


slide();
setInterval(slide,3500); // 3.5초마다 슬라이드 부르도록 설정