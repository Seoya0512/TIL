# Day4 : 수학, 배열

## Problem 1 : 피자 나눠 먹기(2) 📣

```
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
```

<br>

## Solution 📌

```jsx
function solution(n) {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }
  return piece / 6;
}
```

<br>

### 최소공배수 📌

```
두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수
```

해당 문제를 풀이 하기 위해서는, 6 과 n의 최소 공배수를 구하면 된다.

피자조각(piece) 6부터 시작해서 n으로 나누었을 때 나머지가 0이 되는지 비교하고, 6만큼 더 하며 공배수를 찾아낸다.

이후, 피자 몇 판을 구해야 함으로 다시 조각수인 6을 나누어 줘야 최종 답이 나온다.

<br>

## Problem 2 : 피자 나눠 먹기 (3) 📣

```
머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
```

<br>

## Solution 📌

```jsx
function solution(slice, n) {
  return n % slice ? parseInt(n / slice) + 1 : parseInt(n / slice);
}
```

<br>

### 해결 🎯

n이 slice로 나누어 떨어지지 않은 경우를 구분해서 문제를 풀이했다. 나머지가 0이 아닌 경우에는 몫에 +1 한 값을, 그렇지 않은 경우에는 몫을 반환한다.

🔥 이 때 사용된 개념이 `반올림`

<br>

## Simple Solution 📌

```jsx
const solution = (slice, n) => Math.ceil(n / slice);
```

### `Math.ceil`

자바스크립트에는 반올림 메소드가 있다. `Math.ceil`은 항상 round up한 숫자 값 혹은 주어진 값과 같은 숫자를 반환 한다.

```jsx
console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8
```

<br>

### 참고자료

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
