# 💁🏻‍♂️ 학습 가이드

- 배열이 필요한 이유와 선언하는 방법
- 배열의 값을 추가, 수정, 삭제하는 방법
- 반복문이 필요한 이유와 사용하는 방법
- 배열과 반복문을 함께 자주 사용하는 이유
- 배열의 메서드 5가지와 사용 방법

---
<br>

### 배열(Array)
- 1개의 변수에 여러개의 데이터를 한 곳에 저장할 수 있음 
- [대괄호]로 구성되어 있으며, 특정한 요소를 담는 데이터 타입 
- 배열에 문자열을 넣을때는 쉼표로 구분 

    ```js
    let sandwich = ["peanut butter", "jelly", "bread"];
    ```

#### 배열 생성 
1. `Array()` 생성자 함수 
    ```js
    console.log(new Array(4))
    ```
    ![https://storage.googleapis.com/replit/images/1600842372008_d00d7d4a73a83479f46c8bf415d871dc.png](https://storage.googleapis.com/replit/images/1600842372008_d00d7d4a73a83479f46c8bf415d871dc.png)

    - 4개의 빈공간을 가진 배열 생성 
  
<br>

#### 다차원 배열(multi-dimensional array)
- 배열 안에 또 다른 배열이 요소로 포함됨
    ```js
    [["Bulls", 23], ["White Sox", 45]]
    ```
<br>

### 배열 요소 접근
1. `index` 를 사용해 배열안에 데이터 접근 : [접근하고자 하는 index]
   ```js
    let array = [50,60,70];
    array[0]; // equals 50
    ```
2. 다차원 배열의 접근 방법 : 상위 배열 접근 → 하위 배열에 접근 
    ```js
    let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
    ];

    arr[3][0][1]; // equals 11
    ```
3. 배열의 순회 (`반복문`)

<br>

#### 배열요소 수정 
1. `index` 를 사용해 배열의 요소 변경 
    ```js
    let array = [50,60,70];
    array[0] = 15;
    // --> array eqauls [15, 60, 70]
    ```
2. `push()` :  배열 끝에 항목 추가하기
3. `unshift()` : 배열 앞에 항목 추가하기 

<br>

#### 배열 요소의 삭제 
1. `delete` 연산자 : 요소를 삭제하지만, length에는 변함이 없다. 
    ```js
    const numbersArr = ['zero', 'one', 'two', 'three'];
    delete numbersArr[2];
    console.log(numbersArr);   //--> ["zero", "one", empty, "three"]
    ```
2. `splice` 메소드 : 요소와 length 도 반영해서 수정함 
    ```js
    const numbersArr = ['zero', 'one', 'two', 'three'];
    numbersArr.splice(2,1); // splice (시작 인덱스, 삭제할 요소의 수)
    console.log(numbersArr); // --> ["zero", "one", "three"]
    ```
3. `.pop()` : 배열 끝에서부터 항목 제거
4. `shift()` : 배열 앞에서 부터 항목 제거

<br>

### 배열의 메서드 (Array Method)
❗️ 메서드의 종류가 다양하기 때문에 추가적으로 알게된 부분은 꼭 추구하기 

1. `slice` 
    1. 배열 내의 특정한 요소의 index 범위에 따라 새로운 배열을 리턴 
    2. 원본 배열을 변형시키지 않기에 **"새로운 변수"를 선언** 해야함 
    3. 구조
    ![https://storage.googleapis.com/replit/images/1600925408364_f6b87ff7f040565867827625a85831a5.png](https://storage.googleapis.com/replit/images/1600925408364_f6b87ff7f040565867827625a85831a5.png)
    - 인자: 배열의 index 시작점, index 끝점

    <br>

    4. 예시 
        ```js
        let nums = [1,2,3,4,5]
        let nums_new = nums.slice(1,4)

        console.log(nums_new) // [ 2, 3, 4 ]
        ```
<br>

2. `splice` 

    1. 배열 내의 특정한 요소를 삭제하거나, 다른 요소로 대치하거나 새로운 요소를 추가할 때 사용 

    2. 댓글 삭제 기능을 구현할 때 많이 활용
    3. 원본 배열도 수정함 

    3. 구조
    ![https://storage.googleapis.com/replit/images/1600865417789_04e08b06348e17f859413b1a41125078.png](https://storage.googleapis.com/replit/images/1600865417789_04e08b06348e17f859413b1a41125078.png)
    
    - 인자는 최소 1개만 사용할 수 있음 
    - 인자 : 배열의 index 시작점 , 삭제할 요소의 개수, 추가하고 싶은 요소
    - 중간에 새로운 요소를 추가할 때, 삭제할 요소의 개수 = 0

    <br>

    4. 예시
        ```js 
        let num = [1,2,3,4,5];
        num.splice(2,1,10); // 요소 3을 삭제하고 10으로 교체

        console.log(num); // [ 1, 2, 10, 4, 5 ]
        ```

3. `filter`
    1. 조건에 맞는 요소(true)들만 모아서 새로운 배열을 반환
    2. 조건에 부합되는 요소가 없다면 '빈 배열' 반환 
    3. 구조
    `filter(callbackFunction(element, index, array), thisARg)`
    - callback 인자 중 element는 필수, 나머지는 선택적 

    4. 예시
        ```js
        // 방법 1 
        let numbers = [10, 4, 32, 17, 5, 2];

        let result = numbers.filter((value)=> value > 10);

        console.log(result);      // [ 32, 17 ]

        // 방법 2 선언된 함수에를 filter()인자에서 callback하는 방법) 
            function isBiggerThanTen (value) {
                return value > 10;
            }

        let result = numbers.filter(isBiggerThanTen);

        console.log(result);      // [ 32, 17 ]
        ```

4. `concat` 
    1. 주어진 배열에 기존 배열을 합쳐서 새로운 배열을 반환 
    2. 원본 배열은 변경되지 않음 
    3. 중복된 숫자나 글자를 가진 배열을 합쳐도 중복과 상관 없이 배열 합쳐줌 
        ```js
        const numbers = [1, 2, 3];
        const numbers2 = [3, 4, 5];

        numbers.concat(numbers2);      // [ 1, 2, 3, 3, 4, 5 ]

        ```