# 💁🏻‍♂️ 학습 가이드

- 객체란 무엇이며 필요한 이유
- 객체에서 property, key, value
- 객체에 접근 하는 두 가지가 있는 이유
- 객체의 값을 추가,수정, 삭제하는 방법
- 객체와 배열이 섞인 복잡한 객체 만들어서 접근하는 방법
- 배열의 타입이 객체인 이유
___
<br>

## 객체 (Object)
- 자바스크립트 데이터 타입 중의 하나 
- Key값과 Value 값을 쌍으로 구성됨 (Property), 순서가 중요하지 않음 
  ![https://storage.googleapis.com/replit/images/1600762009152_d417d12b27cd55f594246c10c142de37.png](https://storage.googleapis.com/replit/images/1600762009152_d417d12b27cd55f594246c10c142de37.png)

<br>

### 객체 생성 
  1. Object Literal (더욱 선호 되는 방법)
     1. {중괄호}안에 key와 value를 쌍으로 묶어서 생성 
     2. key 값이 여러개인 경우 쉼표(,)로 구분 
        ```js
        // key : name, bloodType, mbti, favoriteCoffee

            let person1 = {
        name: '서야',
        bloodType: 'O형',
        mbti: 'ESFP',
        favoriteCoffee: '바닐라라떼'
        }
        ```
    
  2. Object 생성자 함수 
        ```js
        var person = new Object();

        //프로퍼티 추가
        person.name = '서야';
        person.bloodType = 'O형';
        ```

  3. 생성자 함수 : 프로퍼티가 동일한 객체 여러 개를 간편에 생성 
        ```js
        // 생성자 함수
        function Person(name, gender) {
        this.name = name;
        this.gender = gender;
        this.sayHello = function(){
            console.log('Hi! My name is ' + this.name);
        };
        }

        // 인스턴스의 생성
        var person1 = new Person('Lee', 'male');
        var person2 = new Person('Kim', 'female');
        ```


<br>

### 객체 속성 접근 방법 
1. Dot Notation (마침표)
2. Bracket Notation (대괄호) : 프로퍼티 이름이 반드시 '문자열' 
3. 변수를 사용한 객체 접근 

4. `for-in` : 객체의 문자열 키(Key)를 순회하기 위한 문법 
4-1.  `for-of` : 배열의 요소를 순회하기 위해 사용 

<br>

#### 객체 수정 
객체가 소유하고 있는 프로퍼티에 새로운 값 할당 

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person['first-name'] = 'Kim';
console.log(person['first-name'] ); // 'Kim'
```

#### 객체 속성 추가
객체가 소유하고 있지 않은 프로퍼티에 값을 항당 --> 프로퍼티를 객체에 추가 

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

person.age = 20;
console.log(person.age); // 20
```

#### 객체 속성 삭제 
`delete` 연산자를 사용, 피연산자는 프로퍼티 키(key)로 지정 

```js
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

delete person.gender;
console.log(person.gender); // undefined
```
### 객체 종류
1. `Set`
   1. 중복되지 않는 유일한 값들의 집함 
   2. 생성 : `Set()` 생성자 함수로 생성 
   3. 배열에서 중복된 요소를 제거하는데 사용한다.
      ```js
      // Set을 사용한 배열의 중복 요소 제거
      const uniq = array => [...new Set(array)];
      console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]
      ```
      


참고자료
1. img : 위코드 제공 자료
2. https://poiemaweb.com/js-object
3. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object