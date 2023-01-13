# Day2 : 사칙연산, 조건문, 배열

## Problem 1 : 분수의 덧셈 📣

```
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
```

<br>

## Solution 📌

```jsx
function solution(numer1, denom1, numer2, denom2) {
  const denomTotal = denom1 * denom2;
  const numerTotal = numer1 * denom2 + numer2 * denom1;

  const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
  const gcd = getGCD(denomTotal, numerTotal);

  return [numerTotal / gcd, denomTotal / gcd];
}
```

<br>

### 문제 😐

문제를 풀이할 때, 분모가 통분되어야 하는 경우 그렇지 않은 경우 등을 나눈 경우의 수를 나열해서 시작했다. 그렇게 했을 때 발생하는 문제는 `코드가 길어지고 if문의 경우는 많아진다` 였다. 더욱이 테스트 코드를 통과하지 못했다.

```jsx
function solution(numer1, denom1, numer2, denom2) {
  const answer = []
  if (denom1 === denom2){
    answer.push(numer1 + numer2, denom1)
  } else if (denom1 % denom2 === 0){
    numer2 *= (denom1 % denom2)
    answer.push(numer1 + numer2, denom1)
  }
  ....
  return answer
}
```

### 해결 🎯

문제와 연관된 수학적 개념(혹은 알고리즘)이 있을 거라고 판단했다. 그 개념은 바로 `최대공약수`

분모와 분자의 최대공약수를 구해서 그 값을 각각 나눠 주면 `최소공배수`를 분모 값으로 가지는 `기약분수`를 구할 수 있었다.

<br>

#### 최대공약수 : 두 수 A와 B의 공통된 약수 중에 가장 큰 정수

```jsx
// 2부터 min(num1, num2)까지 정수를 나누어 gcd 값을 구하기

let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};
```

#### 유클리드 호제법을 활용한 최대공약수 구하기

`GCD(num1, num2) = GCD(num2, num1%num2)`라는 기본 원리를 가지고 있으며 `num1%num2`가 0이 될 경우, num2가 최대공약수가 된다.

```
num1 = 36
num2 = 18

GCD(36,18) =  GCD(18, 9) = GCD(9, 0)

FINAL_GCD = 9
```

위의 개념을 적용해서 GCD를 구하는 함수를 작성하게 되면 아래와 같다.

```jsx
const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
```

num1를 num2로 나눈 나머지가 0 이 될때 까지 재귀함수를 통해 최대공약수를 구하게 된다.

<br>

### 참고자료

- https://coding-grandpa.tistory.com/111
- https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0
