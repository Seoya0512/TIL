### 회고록 EP3. 
자바스크립트 문법을 공부하고 지난번 HTML 과 CSS로 구성한 정적 웹사이트를 자바스크립트를 사용해서 동적으로 보완했다. 오늘은 해당 작업을 진행하며 사용한 `캐러셀` 이라는 기능에 대해 기록을 남겨보려고 한다. 


자기소개 페이지 : [🐣Youngseo Lee](https://seoya0512.github.io/main.html)
구현 코드: [github](https://github.com/Seoya0512/Seoya0512.github.io)
___

>**캐러셀(Carousel)**<br>
> 콘텐츠(이미지, 텍스트 혹은 사용자 정의 마크업 등을) 순화시키기 위한 슬라이드쇼 



### 자기소개 페이지 수정 1 🔥
메인 페이지의 이미지를 4개의 이미지를 사용해 자동 이미지 슬라이드쇼 구성 

![main 페이지](https://velog.velcdn.com/images/seoya_lee/post/30937f44-b7f5-4fb2-8c16-93d6aa9143a8/image.gif)



### 기능 구현 순서 

#### 1. 웹사이트 구조 만들기, HTML
4개의 이미지를 담을 수 있는 `slider` div를 생성하고, `slider-item`에 4장의 이미지를 담았다.

```html
    <!--background slider -->
    <div class="slider">
      <div class ="slider-item">
        <img src ="resources/images/main1.jpeg" class = 'main_pic' >
      </div>
      <div class ="slider-item">
        <img src ="resources/images/main2.jpg" class = 'main_pic' >
      </div>
      <div class ="slider-item">
        <img src ="resources/images/main3.jpeg" class= "main_pic" >
      </div>
      <div class ="slider-item">
        <img src ="resources/images/main4.jpg" class= "main_pic" >
      </div>
    </div>
    
    <footer class = "message">
      <p> Let's start my journey as a web developer..</p>
    </footer>
 ```
 
#### 2. 웹사이트 디자인, CSS
HTML에서 생성한 element들에 맞는 규격과 위치를 조정했다. 

```css
/* img */

.slider{
    width: 100%;
    height: 480px;
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

.slider-item{
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 0;
    opacity: 0;
    position: absolute;
    transition:all 0.5s ease-in-out;
    transform: scale(0.9);
}


.main_pic {
    width: 100%;
    height: 450px;
    object-fit: cover;
}

.showing{
    z-index: 1;
    opacity: 1;
    transform: none;
}
```


#### 3. 슬라이드쇼 동작을 지원하기, javascript
현재 슬라이드를 넘기고, 그 다음 슬라이드로 넘어가게 하는 기능을 구현하는 함수를 구성했다. 또한, `setInterval(slide,3500)`을 사용해 각 슬라이드가 넘어가는 시간도 조정했다. 

```js
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider-item:first-child");
const lastSlide = document.querySelector(".slider-item:last-child");

  /* slide() 함수 설명 
  1. 다음 슬라이드로 넘어가기 위해 현재 창을 지우고, 다음 슬라이드(next sibiling)불러준다.
  2. next sibiling이 없는 마지막 순서의 슬라이드 다음은 첫번째 슬라이드로 불러준다. */

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
```

<br>

### 자기소개 페이지 수정 2 🔥
"who am i" 페이지의 사진을 버튼을 눌러 다음 슬라이드로 넘어갈 수 있도록 구현

![whoami 페이지](https://velog.velcdn.com/images/seoya_lee/post/8e170f43-a3d1-4003-99b0-ecac7d531a66/image.gif)


🐣 같은 캐러셀 기능을 이용하지만, 버튼을 넣어 작동시키는 부분이 메인페이지 부분보다 조금 더 복잡했다는 후기..

### 기능 구현 순서 

#### 1. 웹사이트 구조 만들기, HTML
가장 먼저 `carousel`이라는 div에 모든 element(버튼, 이미지 등) 넣어 구성했다. 여기서 특이점은 각 이미지를 div에 넣어서 만들지 않고, `<ul>` 태그를 사용해 리스트 형식으로 구성했다. 

```html
<!-- Who am I picture slides -->
    <div class = "background">
      <section aria-label="Photos">
        <div class = "carousel" data-carousel>
          <button class = "carousel-button prev" data-carousel-button ="prev">&#8656;</button>
          <button class ="carousel-button next"data-carousel-button ="next">&#8658;</button>
          <ul data-slides>
            <li class ="slide" data-active>
              <img src ="resources/images/whoami1.jpeg" alt= "whoami1">
            </li>
            <li class="slide">
              <img src ="resources/images/whoami2.jpg" alt = "whoami2">
            </li>
            <li class="slide">
              <img src ="resources/images/whoami3.jpg" alt = "whoami3">
            </li>
          </ul>
        </div>
```

#### 2. 웹사이트 디자인, CSS
각 element에 맞는 속성들을 지정해줬다. 각 이미지를 담은 slide 의 위치를 세부 조정하고, 버튼의 경우 이벤트(마우스를 올려두거나 클릭 하는 행위 등)에 따라 색상이 변할 수 있도록 지정했다. 

```css
/* img slides */
.carousel {
    width: 50%;
    height: 450px;
    position: relative;
    float: left;
}

.carousel > ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.slide {
    width: 90%;
    position: absolute;
    padding-top: 120px;
    padding-left: 20px;
    inset: 0;
    opacity: 0;
    transition: 200ms opacity ease-in-out;
    transition-delay: 200ms;
}

.slide > img{
    display: block;
    width: 100%;
    height: 450px;
    margin: auto;
    object-fit: fill;
    object-position: center;
}

.slide[data-active] {
    opacity: 1;
    z-index: 1;
    transition-delay: 0ms;
}

/* button */
.carousel-button {
    position: absolute;
    z-index: 2;
    background: none;
    border: none;
    font-size: 3rem;
    top: 75%;
    transform: translateY(-20%);
    color: rgba(255,255,255, .5);
    cursor: pointer;
    border-radius: .25rem;
    padding: 0 .5rem;
    background-color: rgba(0,0,0, .1);
}

.carousel-button.hover,
.carousel-button:focus {
    color: white;
    background-color: rgba(0,0,0, .2);
}

.carousel-button:focus {
    outline: 1px white;
}

.carousel-button.prev {
    left: 4%;
}

.carousel-button.next {
    right: 10%;
}
```

#### 3. 버튼 슬라이드쇼 동작 구현, javascript
버튼과 슬라이드를 호환시키는 부분이 조금 복잡했다. 코드에 대한 설명은 아래 참고! 

```js
const buttons = document.querySelectorAll("[data-carousel-button]")

/* 버튼을 클릭하면 이전 혹은 다음 슬라이드로 넘어가도록 지정 */

buttons.forEach(button => {
    button.addEventListener("click",() => {
        const offset = button.dataset.carouselButton === "next"? 1: -1
        // slides로 접근하게 됨
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        /* 슬라이드를 어디로 넘길지 정하기 위해 현재페이지 index를 파악하고 offset을 통해 +1, -1 연산을 진행 */
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex =slides.children.length -1 // 첫번째 페이지에서 마지막으로 넘어감 
        if(newIndex >= slides.children.length) newIndex = 0 // 마지막 페이지에서 첫번째 페이지로 이동 

       /* 새로운 슬라이드를 active 시키고, 이전의 슬라이드는 active한 상태 종료 */ slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    }) 
})
```
<br>

### 자기소개 페이지 수정 3 😎
whatidid 페이지는 HTML 과 CSS를 수정해서 조금더 깔끔하게 보일 수 있도록 수정했다. 또한, 이미지에 마우스를 확대되어 보이는 기능을 구현했다. 

![](https://velog.velcdn.com/images/seoya_lee/post/7fbdac90-dbc6-45c3-8e0a-4d537291979d/image.gif)


### 느낀점
기존의 코딩테스에서 사용하는 자바스크립트와 웹페이지를 만들 때 사용하는 코드에 차이가 있음을 느끼게 됐다. 그래서 캐러셀 동작을 구현할 때도 `구글링`을 통해 코드를 찾고, 그 코드를 내 코드에 적용해 보는 방식으로 작업을 진행했다. 

내가 처음부터 알고 뚝딱 뚝딱 만들어 가면 그것이 제일 최고지만, 지금은 그럴 수준이 아니라는 것을 인정했다. 다른 분들이 먼저 작성한 코드를 참고하고 그것을 이해하는 것으로 한 단계씩 성장해야 할 듯 하다. 

~~한줄 기록 : 아직 갈길이 멀다.~~


___

참고 자료 1.  [노마드 코더](https://www.youtube.com/watch?v=l18HCZqBs6I&ab_channel=%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94NomadCoders)
참고 자료 2. [버튼식 이미지 슬라이드](https://www.youtube.com/watch?v=9HcxHDS2w1s&ab_channel=WebDevSimplified)