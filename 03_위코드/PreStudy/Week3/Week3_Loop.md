# 💁🏻‍♂️ 학습 가이드

- 배열이 필요한 이유와 선언하는 방법
- 배열의 값을 추가, 수정, 삭제하는 방법
- 반복문이 필요한 이유와 사용하는 방법
- 배열과 반복문을 함께 자주 사용하는 이유
- 배열의 메서드 5가지와 사용 방법

---
<br>

## 반복문 (Iteration)
조건식의 평가 결과가 참인 경우 코드 블럭을 실행한다. 그 후 조건을 다시 검사해 거짓일 때까지 반복해서 코드 블럭을 실행한다. 

<br>

### for 문 
어떤 특정한 조건이 거짓으로 판별될 때까지 반복 

1. 구조
![https://storage.googleapis.com/replit/images/1600679050924_1acfdaa5ddf6268ccea5a54d14d6a85d.png](https://storage.googleapis.com/replit/images/1600679050924_1acfdaa5ddf6268ccea5a54d14d6a85d.png)

   - 초기화문 : 변수 선언자 작성 필수, 종종 카운터 변수(counter variable)라고도 불림 
   - 조건문 : 조건문이 true인 경우 반복문을 계속 실행, false일 경우 종료
   - 증감식 : ++ ,  -- 등등 

2. 예시
    ```js
    let result = 0;
    for(let i=0; i <= 10 ; i++) {
    result += i
    }
    console.log(result) // 45

    // 무한루프
    for (;;) { } 
    ```
<br>

### while 문
어떤 특정한 조건이 거짓으로 판별될 때까지 반복 

1. 구조
   ```js
    초기화식
    while (종료 조건) {
    // 실행할 코드

    증감식
    }
    ```

2. 예시
   ```js
   var count = 0;

    // count가 3보다 작을 때까지 코드 블록을 계속 반복 실행
    while (count < 3) {
    console.log(count);
    count++;
    }

    // 무한루프 
    while (true) { }
    ```
<br>

### do..while 문
코드 블록을 먼저 실행하고 조건식을 평가, 무조건 한 번 이상 코드 블록이 실행됨 

1. 구조
    ```js
        초기화식
    do {
    // 실행할 코드

    증감식
    } while (종료 조건)
    ```

2. 예시
    ```js
    var count = 0;

    // do 코드블러 먼저 실행 , 조건 판단 
    do {
    console.log(count);
    count++;
    } while (count < 3); 
    ```
<br>

### 반복문 종료하기 
1. `break` 
    - 반복문 코드 블록을 탈출하게 한다. 
    - 반복문을 종료하고 반복문 뒤에 있는 코드로 이동할 수 있도록 한다. 

2. `continue`
    - 반복문의 코드 블록 시행을 중단하고 증감식으로 이동. 다음 반복으로 건너뜀
    - 반복문을 탈출하지 않는다. 


참고자료
1. img : 위코드 제공자료
2. https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Looping_code
3. https://poiemaweb.com/js-control-flow