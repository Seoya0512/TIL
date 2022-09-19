# WEEK 2 : JavaScript


# 💁🏻‍♂️ 학습 가이드


- 변수가 필요한 이유와 선언하는 방법
- 자바스크립트 데이터 타입의 종류
- `number`와 `string`의 메서드 각각 3개와 사용 방법
- 함수가 필요한 이유
- 함수의 정의와 호출의 차이점
- 조건문이 필요한 이유

---
<br>

## 변수 (variable)

데이터를 저장할 때 쓰이는 저장소 

예시)  변수 `messag`는  message 라는 이름표가 붙어 있는 상장에 “Hello!” 값을 저장

데이터에 고유의 이름인 식별자(identifier)를 명시하여 **1) 메모리에 저장된 값(데이터)를 참조(재사용)** 한다. **2)** 변수명을 통해 **코드의 가독성을 향상**시킨다.  
<br>

### 변수의 선언

1. `let` 
    
    블록 스코프가 아닌  `var` 를 대신해서 나온 *모던 변수 선언 방식* 
    
    a. 전역변수 : 함수 밖에서 변수를 선언할 경우
    b. 블록 레벨 지역변수 : 함수 혹은 “{블록} 내에 선언된 경우 
        
        ```jsx
        if (true) {
          let test = true; // 'let'으로 변수를 선언함
        }
        
        alert(test); // Error: test is not defined
        ```
        
    c. 변수 값 변경 가능 
    
2. `const`
    a. 전역변수 : 함수 밖에서 변수를 선언할 경우
    b. 블록 레벨 지역변수 : 함수 혹은 “{중괄호}” 로 둘러싸인 블록 내에서 선언된 경우 
    c. 변화하지 않는 변수 : 변수 재 선언, 재할당 불가능 
    
3. `var`  
    
    초기 자바스크립트 구현 방식으로 잘 사용하지 않는 오래된 변수 구현 방법 
    
    a. 전역변수 : 함수 밖에서 선언할 경우
    b. 함수 레벨 지역변수 : 함수 내에서 변수를 선언한 경우
        1. {블록} 밖에서 변수의 접근이 가능함 → 전역 변수의 남발 
        
        ```jsx
        if (true) {
          var test = true; // 'var'로 변수를 선언
        }
        
        alert(test); // true(if 문이 끝났어도 변수에 여전히 접근할 수 있음)
        ```
        
    c. 변수의 중복 선언을 허용하지만 의도치 않은 변수값 변경을 일으킬 수 있음  
    d. 변수 호이스팅 : 변수를 선언하기 전에 참조가 가능하다. ( 변수 선언 위치가 상관 없음)
   
<br>
<aside>
🐥 Javascript에서 변수를 선언할 때 1) const를 사용한다  2) 재할당이 필요한 경우 let 키워드를 사용 3) 변수의 스코프는 최대한 좁게 생성한다.

</aside>

---
<br>

## 자바스크립트 데이터 타입의 종류

데이터 타입(Data Type)은 프로그램이 언어에서 사용할 수 있는 데이터의 종류 

> **원시 타입**  : 변경 불가능한 값, pass-by- value
> 
> - `boolean` : true or false
> - `null` : 의도적으로 변수에 값이 없다는 것을 명시
> - `undefined` : 선언 이후 값을 할당하지 않은 변수
> - `number`
> - `string`
> - `symbol` (ES6에서 추가)
> 
> **객체 타입** 
> 
> - `object` : 이름과 값(property), 메소드(method)를 포함한 독립적 주체

<br>

### `number` 메서드

```jsx
// 다른 타입의 값을 숫자로 변환, 문자열을 숫자로 반환 
Number('123'); 

//주어진 값이 NaN인지 확인 
Number.isNaN();

//주어진 값이 유한수 인지 확인
Number.isFinite();

//주어진 값이 정수인지 확인
Number.isInteger();

//숫자형 타입을 문자형으로 변경시켜줌
Number.toString();

//소숫점자리를 반올림하여 문자열로 봔환
Number.toFixed([fractionDigits]);
```

### `string` 메서드

```jsx
// 다른 타입의 값을 문자열로 변환 
string(123); 

// index에 해당하는 위치의 문자 반환
str.charAt(0); 

//인수로 전달한 1개 이상의 문자열과 연결하여 새로운 문자열 반환
str.concat(str1[,str,...strN])

//문자 또는 문자열을 검색해서 해당 index 반환
str.indexOf(searchString);

//소문자로 변경
str.toLowerCase();

//대문자로 변경
str.toUpperCase();

```

< 참고 자료 >

- number 메소드 : [https://poiemaweb.com/js-number](https://poiemaweb.com/js-number)
- string 메소드 :  [https://poiemaweb.com/js-string](https://poiemaweb.com/js-string)

---

