## 문제

s는 여러 괄호들로 이루어진 String 인자입니다. s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다. 아래의 경우 유효합니다.

예를 들어 아래와 같습니다.

```
s = "()"
return true

s = "()[]{}"
return true

s = "(]"
return false

s = "([)]"
return false

s = "{[]}"
return true

```

<br>

### **My Answer 🎃**

```jsx
function isValid(s) {
  const strArr = s.split('');
  const checkArr = [];
  let result = true;
  const bracket = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  };
  
  for (let i=0; i < s.length; i++) {
    if (Object.keys(bracket).includes(strArr[i])) {
      checkArr.push(strArr[i])
    } else {
      let key = checkArr.pop();
      if (s[i] !== bracket[key])
        result = false;
    }
  }
  if (checkArr.length !== 0){
    result = false;
  }
  return result
};
```

<br>

### **📌  코드 리뷰 전..**

이 문제를 풀기 위해서 **스택(Stack)**이라는 자료 구조를 학습했다.  스택은 “쌓다”라는 의미를 가지고 있고, 데이터를 차곡 차곡 쌓아 올린 형태의 자료구조이다. 또한, **LIFO(Last In First Out) 구조**를 가지고 있는데 가장 마지막에 삽인되 데이터가 먼저 삭제되는 구조를 뜻한다. 

**스택에 사용되는 연산 ➕ ➖**

- 데이터 삽입 : push
- 데이터 추출(삭제) : pop

<br>
해당 개념을 적용해서 문자열로된 s 를 array로 변형해 새로운 Array 에서 스택구조를 활용해 push 와 pop을 통해 순차적으로 해결했다. 

<br>

### 📌 코드 설명

1. `strArr` : 문자열로 들어온 인자(s)를 `.split('')` 메소드를 사용해서 나눠준다. 
2. `bracket` 이라는 객체를 생성한다. 반복문과 조건문에 값을 판별하는데 사용하기 위해서 지정해둠 
3. `s.length` 만큼 반복문을 실행하게 되는데
    -  첫번째 조건문에서는 bracket의 키 값( “(”, “{”, “[”) 에 해당 하는 값은 빈 배열(checkArr)에 `push` 하게 된다. 
    - 키 값과 반대 방향에 있는 괄호들에 대해서는 `else` 구문으로 넘어간다. 이때, `key` 값은 checkArr의 마지막 값이 되는데 값이 존재한다면, bracket의 키 값( “(”, “{”, “[”) 이 될 것이다. 
    - 이를 활용해 bracket에서 value를 확인해 비교하고 값이 존재 하지 않으면 `false` 반환 
4. 반복문이 종료된 후, checkArr에 값이 남아 있으면 `false` 그렇지 않으면 `true` 값을 반환