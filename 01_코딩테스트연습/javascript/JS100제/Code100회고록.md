[JS100제 문제](https://paullab.co.kr/codefestival.html)

제주도 코딩캠프 JavaScript 100제 1권을 마무리했다🤘🏻 그래서 이번 포스팅은 50개의 문제 중에 기억하고 싶은 혹은 새로운 깨달음이 있었던 내용들을 남겨보려고 한다.

<br>

## 👾 CODE

### 문제 18번 : 평균 점수

나의 풀이 방법과 교재의 답안을 비교해보려고 한다. 우선 내 코드를 설명해 보면,

1. 세 과목의 점수를 입력받고, `split('')` 를 통해 배열을 생성하고, `map(Number)`를 통해 각 요소의 성분을 숫자로 변경
2. 생성된 배열에 `reduce` 메서드를 적용해 각 점수의 누적 합을 구한다. 그 후 배열의 길이(과목 수)를 나눠서 평균을 구하게 된다.

```js
//문제18: 평균 점수 (my answer)
const score = prompt("세 과목의 점수를 입력하세요.").split(" ").map(Number);

let sumAvg = Math.floor(
  score.reduce((sum, num) => sum + num, 0) / score.length
);

console.log(sumAvg);
```

교재의 답변을 간단하게 설명하면,

1. `split('  ')`를 통해 배열을 생성한다.
2. 합계(sum)을 구하게 되는데 이 과정에서 `parseInt(,10)`을 사용해 각 요소를 십진수의 형태의 숫자로 데이터 타입을 변환
3. 과목의 숫자만큼 합계를 나눠준다. 이 때 `Math.floor` 메서드는 소수점 자리를 모두 버린다.

```js
//문제18: 평균 점수 (textbook answer)
const scoreList = prompt("세 과목의 점수를 입력하세요.").split(" ");
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scoreList[i], 10);
}

console.log(Math.floor(sum / 3));
```

<br>

### 문제34: sort 구현하기 (오름차순)

`sort` 메서드를 사용하면 배열의 순서를 재구성 할 수 있다. 숫자 배열을 **오름차순으로 배치**하기 위해서는 `array.sort((a,b) => a-b)` 를 사용하면 된다. 반면, **내림차순**을 구하고 싶다면 `array.sort((a,b) => b-a)`를 사용한다.

```js
// 문제34: sort 구현하기 (오름차순)
const unsorted = prompt("키를 입력하세요.");
// sort함수는 기존의 element를 수정하기 때문에 다른 변수에 복사후 적용해줌
const sorted = unsorted
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

if (unsorted === sorted) {
  console.log("YES");
} else {
  console.log("NO");
}
```

<br>

### 문제37: 반장 선거

> 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램 작성

후보와 각자 투표수를 확인할 수 있도로 객체를 생성해서 풀이를 진행했다.

1. `obj`라는 객체에 후보의 이름이 있는 경우에는 있는 값에서 +1을 해주고, 없는 경우에는 1을 값에 표기
2. `reduce`를 통해 각 후보들의 값을 확인하고 최대 값을 가진 후보자의 이름(key)를 판별한다.

```js
// 문제37: 반장 선거
const keys = prompt("투표해 주세요.").split(" ");
const obj = {};

for (let i = 0; i < keys.length; i++) {
  if (keys[i] in obj1) {
    obj[keys[i]] += 1;
  } else {
    obj[keys[i]] = 1;
  }
}

// reduce 메서드는 재귀함수의 성질을 가지고 있음
let winner = Object.keys(obj).reduce(function (a, b) {
  return obj[a] > obj[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${obj[winner]}표로 반장이 되었습니다.`);
```

<br>

### 문제 38: 호준이의 아르바이트

> 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다. **학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

1. `sort`를 사용해 점수를 내림차순으로 나열
2. 중복을 제거한 top3 값을 확인
   `indexOf(element)` 배열에서 요소의 Index를 리턴하는데, 중복값이 있을 경우 낮은 Index를 리턴하게 된다. 해당 풀이에서는 첫번째 중복값의 index와 일치하지 않는 나머지 중복값은 필터링되며 top3에는 1~3위 학생의 점수만 남게 된다.
3. top3에 각 scores요소가 포함되어 있는지 확인하고 그 개수를 센다. `array.prototype.includes()` 배열 안에 찾는 요소가 있는지 파악후 true, false 값으로 돌려줌

```js
//문제 38: 호준이의 아르바이트
const scores = prompt("점수를 입력하시오").split(" ");

scores.sort((a, b) => b - a);

// 중복을 제거한 top3 값 확인 하기
let top3 = scores.filter((v, i) => scores.indexOf(v) === i).slice(0, 3);

// scores가 value 값에 포함되어 있는 개수 세기
let counts = 0;

for (let i = 0; i < scores.length; i++) {
  let n = scores[i];
  if (top3.includes(n)) {
    count += 1;
  }
}
console.log(count);
```

<br>

### 문제41: 소수판별

> 소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수

해당 문제는 소수의 특징을 이해하고, 다양한 경우를 나눠서 생각할 필요가 있다. `check_prime(num)`이라는 함수를 만들어 풀이를 했다.

1. 숫자 1의 경우 소수에 포함되지 않아서 먼저 if 문을 통해 소수에서 제외 시켜준다.
2. for문에서 `i=2` 부터 시작되는 이유는, 모든 숫자는 1로 나눠떨어지기 때문에 제외했다. if문을 통해 자기기 자신 이외의 작은 숫자와 나눠 떨어지면 소수에서 제외 된다.
3. 그렇지 않은 경우, 즉 조건1 과 2가 아닌 경우 소수로 판별하게 된다.

```js
// 문제41: 소수판별
const num = Number(prompt("숫자를 입력하세요."));

// 1과 자기 자신만으로 나눠지는지 검사
function check_prime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(check_prime(num));
```

<br>

### 문제 47번 : 자릿수의 합 2

> 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

해당 문제를 풀이하기 위해서는 먼저 1부터 20까지의 숫자를 일렬로 놓아야한다.

1. 빈 배열 `arr`를 생성하고, for문을 통해 빈 배열에 숫자를 push해서 일렬로 나열
2. `forEach()`는 배열의 element에 적용하는 메서드이다.
   해당 반복문의 실행과정을 순서대로 설명해보면,
   <br>
   a) arr의 element 한개를 'n'으로 정의 <br>
   b) `n % 10` 을 통해 나머지 값을 sum에 저장 <br>
   c) `Math.floor(n/10)`을 통해 10의 자리수 추출 <br>
   d) 3번을 통해 나온 n을 다시 while문에 넣어서 0이 될때까지 반복, 0이 나오면 반복문 종료

3. 전체 과정을 예시로 들면 아래와 같다. <br>
   예) n=18(a) --> sum += 8 (b) --> n = 1, while 문 (c) -->
   sum += 1 (b) --> n =0, while문 종료 후 다음 n으로 넘어감 --> n =19(a)

```js
// 문제 47번 : 자릿수의 합 2
let arr = [];
let sum = 0;

// 숫자를 나열한 배열 생성하기
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}

arr.forEach((n) => {
  while (n != 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
});

console.log(sum);
```

<br>

## 📚 학습 방법

먼저 혼자 해결해 보려고 노력을 했다. 코드를 구성하는데 필요할 것 같은 기능을 구글링을 통해 찾아서 답변을 작성했다. 해당 방법을 해도 해결이 되지 않은 문제는 답안을 참고해 그 답변을 이해하고 내 것으로 만들기 위해 학습했다.

<br>

## 🔥 느낀점

아직 1부만 풀어서 책에 대한 견해를 남기기는 부족하지만, 개인적으로 **기초**를 학습하는데 많은 도움을 받은 교재이다. 향후 2부 문제도 풀어보면서 본격적인 코딩테스트 준비를 하기전 내공을 다질 수 있을듯 하다.
~~2부 학습 회고는 다음주에 작성하는 것이 목표!~~
