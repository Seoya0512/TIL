const buttons = document.querySelectorAll("[data-carousel-button]")

/* 버튼을 클릭하면 이전 혹은 다음 슬라이드로 넘어가도록 지정 */
buttons.forEach(button => {
    button.addEventListener("click",() => {
        const offset = button.dataset.carouselButton === "next"? 1: -1
        // 버튼으로 slides로 접근하게 됨, 슬라이드 개수 상관 없음
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
         // 슬라이드를 어디로 넘길지 정하기 위해 현재페이지 index를 파악
         // offset을 통해 +1, -1 연산을 통해 슬라이드 이동
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        // 첫번째 페이지에서 마지막으로 넘어감 
        if (newIndex < 0) newIndex =slides.children.length -1
        // 마지막 페이지에서 첫번째 페이지로 이동 
        if(newIndex >= slides.children.length) newIndex = 0

        //새로운 슬라이드를 active 시키고, 이전의 슬라이드는 active한 상태 종료
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})
