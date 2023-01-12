# Day3 : 사칙연산, 배열, 수학

## Problem 1 : 짝수는 싫어요 📣

```
정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
```

<br>

## Solution 📌

```jsx
function solution(nums) {
  const arr = [];
  for (let i = 1; i <= nums; i += 2) {
    arr.push(i);
  }
  return arr;
}
```

<br>

코드를 작성하면서 기억하고 싶은 개념이 있어 기록으로 남긴다. 사소한 부분이라 생각했지만 나를 혼란에 빠지게 했던 개념!

```
for ([초기문]; [조건문]; [증감문])
      문장
```

<br>

### 문제 😐

for문의 `증감문`에서 2만큼 증가하는 로직을 구현하고 싶었다. 처음에 내가 작성한 코드는 아래와 같다.
해당 코드를 작동하게 되면, `무한루프`에 빠지는 문제가 발생한다.

```jsx
for (let i = 1; i <= nums; i + 2) {
  arr.push(i);
}
```

### 해결 🎯

for문의 증감문에는 `i++` 혹은 `i--`로 표기하게 되는데, 이는 `i+=1` 와 `i-=1`라는 뜻을 내포하고 있다. 즉, 2만큼 증가하는 로직을 구현하기 위해서는 `i+=2`로 증감식을 작성해야 한다.

<br>

---

## Problem 2 : 최빈값 구하기 📣

~~(해당 풀이를 통해... 프로그래머스에서 `+9` 를 처음 얻었다...호호호 ✌️)~~

```
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
```

<br>

## Solution 📌

```jsx
function solution(array) {
  const setArr = [...new Set(array)];

  const obj = {};

  for (let i of setArr) {
    obj[i] = array.filter((item) => item === i).length;
  }

  const max = Math.max(...Object.values(obj));
  const answer = Object.keys(obj).filter((key) => obj[key] === max);

  return answer.length !== 1 ? -1 : Number(answer);
}
```

<br>

### 문제 😐

처음 문제를 보고 접근했을 때, array의 각 요소를 count 하는 새로운 배열을 생성하면 되지 않을까? 라고 단순하게 생각하며 로직을 만들었다.

```jsx
function solution(array) {
  const setArr = [...new Set(array)]

  const countArr = []
  let maxCount = 0

  for (let i of setArr) {
    if(array.filter((item) => item === i).length >= maxCount){
      countArr.push[i]
      maxCount = count
    }
  }
  .......
};
```

이렇게 로직을 진행 했을때 `최빈값이 중복 되는 경우 어떻게 해결할 것인가?` 라는 문제를 직면했다. 해결하기 위해서는 반복문과 조건문의 반복적으로 사용해서 그 값을 찾아야..하는데 그 방법은 원치 않았다.

<br>

### 해결 🎯

`key값 과 value`를 가지는 객체(Object)를 사용하는 방법을 생각했다.

1. `new Set` 으로 array에 중복을 없앤다.
2. 반복문을 통해 `setArr`의 요소는 key 값으로, 그 요소의 count 숫자 값은 value 값을 가지는 `obj`를 만든다.
3. `Math.max`를 사용해 `obj`의 value값의 최대값을 찾고, 이후 `filter`를 사용해 해당 max값을 가지는 key값을 찾는다.
4. key값이 하나인 경우 그 값을 return 하고 그렇지 않으면, -1을 return 하도록 한다.

객체의 key와 value를 유연하게 사용함으로 이전 로직 보다 훨씬 간결하고 빠르게 답을 찾을 수 있었다.

<br>

### 기억하고 싶은 개념 📌

처음 `.find` 메소드를 사용해서 최빈값의 key값을 구하려고 했다. 하지만, 중복이 되는 값이 있더라도 1개의 값만 반환했다.

```jsx
const answer = Object.keys(obj).find((key) => obj[key] === max);
```

`Array.prototype.find()`는 판별 함수를 만족하는 첫 번째 요소의 값을 반환

```jsx
const answer = Object.keys(obj).filter((key) => obj[key] === max);
```

`Array.prototype.filter()`는 판별 함수를 만족하는 요소들을 배열로 반환
