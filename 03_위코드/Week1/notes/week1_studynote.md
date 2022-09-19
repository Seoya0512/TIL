# HTML & CSS

# 💁🏻‍♂️ 학습 가이드
---

- HTML, CSS란 무엇이며 필요한 이유
- HTML, CSS, JavaScript의 관계
- `.html,` `.css`, `.js`세 종류의 파일을 연결하는 방법
- script 태그의 위치에 따른 차이점
- 웹 페이지에서 일어날 수 있는 이벤트의 종류
- 이벤트와 자바스크립트 함수와의 관계

<br>

### < 웹페이지 구성을 위한 요소 3 >

#### HTML

1. **H**yper**T**ext **M**arkup **L**anguage
2. 웹페이지의 뼈대 역할 🩻
    1. 내용(Content), 구조(Structure) 담당
    2. 내용(Content) : 이미지, 텍스트, 또는 비디오 등
3. 요소(Element) : <tag>, contents
    
    ```html
    <p> Hello World! </p>
    ```
    

#### CSS

1. Cascading Style Sheets
2. HTML의 각 요소(Element)의 **Style(디자인, 레이아웃 등)**을 정의하여 화면에 어떻게 렌더링 하면 되는지 설명하는 언어
3. 구성요소 : 셀렉터(Selector), 선언블록, 선언, 프로퍼티, 값 (Property : Property value)
    
    ```css
    h1 {
    	color: red;
    	font-size: 12px;
    }
    ```
    

 

#### Javascript

1. 객체(Object) 기반의 스크립트 언어 
2. 웹의 동작을 구현 💃
___

<br>

### `.html,` `.css`, `.js`세 종류의 파일을 연결하는 방법

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">

		<!-- HTML 과 CSS 연동 👇 -- >
    <link rel="stylesheet" href="./style.css" type="text/css">
    <title>Hello</title>
    <style>
    </style>
</head>

<body>
    <div>
    </div>
		<!-- HTML과 자바스크립트 연동 👇 -->
    <script src="./greeting.js"></script>
</body>

</html>
```
<br>

### `script` 태그의 위치에 따른 차이점

> `script` 태그
> 
> 1. 특징 : 파싱 과정 중 script태그를 만나면 HTML은 파싱을 일시 중단하다. 
> 2. 과정 : 다운로드(fetching) → 실행 (execution)

<br>

### 태그의 위치

1.  **head 태그**
    
    HTML head태그 내부에 배치할 경우, `script` 태그를 먼저 읽고 body 내부의 컨텐츠를 파싱하게 된다. 
    
    1. **파일 용량이 크거나 무거운 경우 :** 웹페이지 생성에 긴 시간이 소요 혹은 미완성된 UI 제공으로 사용자 경험에 좋지 않은 영향 
    2. 위험 요소 : HTML 파싱이 끝나지 않은 상태에서 자바스크립트로 인해 DOM이 조작된다면 에러가 발생할 수 있음 
    
2. **body 태그 최하단** 
    1. **장점** : HTML 파싱을 마친 후 script 태그를 읽기 때문에 사용자가 웹페이지를 빠르게 확인할 수 있음 
    2. **단점** : HTML 코드가 자바스크립트에 의존적이면 의미 없는 화면을 제공하게 되거나 (HTML로만 구성된) 화면 제공에 오랜 시간이 거릴 수 있음 
    3. 1번 보다는 권장되는 방법, 조금 더 안전 

1. **head 태그 + async 속성 추가**
    
    ```html
    <!DOCTYPE html>
    <head>
      <script async src="main.js"></script>
    </head>
    ```
    
    1. `async` 는 HTML 파일이 파싱하다가 script 태그를 만나게 되면 HTML 파싱하며 **병렬적**으로 script를 패칭(다운로드) 한다. 
    2. 이후, script 가  실행되는 동안에는 HTML의 파싱이 일시 정지 된다. 
    3. **장점** : 자바스크립트에 의존적인 웹은 더 빨리 실행할 수 있음 
    4. **단점 :**  head 부분에 넣었을 때 문제가 동일하게 발생 할 수 있음 ( 이유불문 HTML의 파싱을 멈추기 때문)
    5. 위험 요소 : script 태그가 여러개일 경우, 순서 상관 없이 다운로드 되므로파일 실행 순서에 영향을 받아 에러 발생 할 수 있음 
    
2. **head 태그 + defer 속성 추가** 
    
    ```html
    <!DOCTYPE html>
    <head>
      <script defer src="main.js"></script>
    </head>
    ```
    
    1. `defer`는 HTML 파일이 파싱하다가 script 태그를 만나게 되면 HTML 파싱하며 **병렬적**으로 script를 패칭(다운로드) 한다. 
    2. 이후 HTML 파싱이 완료된 후 script를 실행한다. 
    3. **장점1** : 자바스크립트에 의존적인 웹은 더 빨리 실행할 수 있음 
    4. **장점2**: script 태그가 여러개일 경우, 순서 상관 없이 다운로드 되지만 실행은 순차적으로 되므로 `async` 의 문제를 개선할 수 있음 
   
   <br>
    
    ### `async` 와 `defer` 속성 비교
    
    1. **공통점** : HTML 파싱과 자바스크립트 패칭(다운로드)를 병렬적으로 진행한다. 
    2. **차이점** : .js 실행 시점 
        1. `async` 는 패칭 후 .js를 실행하여 HTML 파싱의 동작을 정지시킴
        2. `defer` 는 패칭 후, HTML 의 파싱 진행 완료 후 .js를 실행 시킴 
    
    ---
    <br>

    ## 이벤트 (Event)
    
    > 이벤트(event)는 프로그래밍 하고 있는 시스템에서 일어나는 **사건(action)** 혹은 **발생(occurence)**를 뜻한다.
    > 
    <br>

    **웹페이지에서 일어날 수 있는 이벤트의 종류?** 
    
    → 브라우저나 사용자가 행하는 어떤 동장을 의미한다. 
    
    - 유저가 어떤 요소를 선택하거나 어떤 요소 위에 커서를 올려둡니다(hover).
    - 유저가 키보드에서 키를 선택합니다.
    - 유저가 브라우저 창의 크기를 재조정하거나 닫습니다.
    
    ➕ 이외에도 다양한 이벤트가 존재한다. 자세한 내용은 → [이벤트 종류](https://poiemaweb.com/js-event)
    
    <br>

    **사용자와 웹페이지의 상호작용(Interaction)** 
    
    - 브라우저는 이벤트를 감지할 수 있으며 그에 맞는 반응을 해야한다.
    - 브라우저는 이벤트 발생 시 신호를 생산(produce)하고 자동적으로 해결할 수 있는 메커니즘(코드)를 제공하게 된다.
    - `이벤트 핸들러` 또는 `이벤트리스너`: 이벤트가 발생하기 전에는 실행되지 않다가 이벤트가 발생되면 실행 되는 함수
  
    <br>

    ### 이벤트와 자바스크립트 함수와의 관계
    
    1. **In-line 이벤트 핸들러 (비추천)** 
        1. HTML 파싱이 어려워진다. 즉, HTML 과 Javascript가 뒤섞이는 문제가 발생 
            
            ⇒ HTML문서에서 자바스크립트 위치를 최하단에 두는 것이 나은 이유와 유사함 
            
        2. 유지보수가 어려워 진다. 
            
            ⇒ 이벤트 핸들러를 한 번 설정하면 제거하는 것이 어려워짐 
            
        
        ```html
        <!-- In-line 이벤트 핸들러 -->
        <!-- <button onclick="bgChange()"> : HTML코드에 이벤트 속성을 포함 시킴 -->
        
        <body>
            <button onclick="bgChange()">Change color</button>
            <script>
              function random(number) {
                return Math.floor(Math.random()*number);
              }
        
              function bgChange() {
                const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
                document.body.style.backgroundColor = rndCol;
              }
            </script>
          </body>
        ```
        
    
    2. **이벤트 핸들러 프로퍼티 방식** 
        1. 장점 : HTML 과 Javascript 분리 가능 
        2. 단점 : 프로퍼티에 하나의 이벤트 핸들러만 바인딩 가능 
            1. 예를 들어, `click` 이라는 이벤트에 ‘showName’ 과 ‘showAge’라는 핸들러(함수)를 적용한 경우 → 두번 째 함수의 결과만 출력하고 첫번재 함수의 값은 덮는다.
        
        ```html
        <!-- 이벤트 핸들러 프로퍼티 --> 
        <!-- const btn = document.querySelector('button');
        위 코드를 활용해 이벤트 대상인 button 태그를 객체의 프로퍼티로(on.click)으로 등록 -->
        
        <body>
            <button>Change color</button>
            <script>
              const btn = document.querySelector('button');
        
              function random(number) {
                return Math.floor(Math.random()*number);
              }
        
              function bgChange() {
                const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
                document.body.style.backgroundColor = rndCol;
              }
        
              btn.onclick = bgChange;
            </script>
          </body>
        ```
        
    3. **.addEventListenr 메소드(추천)**
        1. 장점 1) 여러개의 이벤트 핸들러를 등록할 수 있음 
        2. 장점 2) 복수의 동일 이벤트 타입 리스너 등록 가능 
            1. 예를 들어, `click` 이라는 이벤트 타입이 2번 연속으로 사용 가능함 
        3. 장점 3) 이전에 추가한 이벤트 핸들러를 제거 할 수 있음 
            1. `removeEventListener()` 사용해서 제거 
            2. 더 이상 해당 이벤트 리스너가 필요 없다고 하면 이벤트 리스너를 제거 해야함 → 웹 애플리케이션 메모리 누수의 원인
        
        ```html
        EventTarget.addEventListner('eventType',functionName[, useCapture]);
        
        /* Event Target : DOM의 대상 요소 
        	 eventType : 이벤트 이름/종류 (ex. 'click')
        	 functionName: 이벤트가 발생했을 때 실행될 콜백함수(이벤트 핸들러)
        ```
        
        ```html
        <!-- .addEventListener -->
        <!-- .addEventListener의 이벤트 타입('click') 실행 후, 두번째 함수인자(random)실행 -->
        
        <body>
            <button>Change color</button>
            <script>
              const btn = document.querySelector('button');
        
              function random(number) {
                return Math.floor(Math.random() * (number+1));
              }
        
              btn.addEventListener('click', () => {
                const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
                document.body.style.backgroundColor = rndCol;
              });
            </script>
          </body>
        ```
        <br>
        
        < 참고 사이트 >
        
        - [https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events)
        - [https://poiemaweb.com/js-event](https://poiemaweb.com/js-event)
        - [https://k0502s.tistory.com/132](https://k0502s.tistory.com/132)