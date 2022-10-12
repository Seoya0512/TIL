/* 코드 기록 및 회고록: https://velog.io/@seoya_lee/회고록04JavaScript-100제-1부-코드-리뷰하기 */

// 문제 2: 배역의 내장함수 
// splice() 메서드는 배열의 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
var arr = [200, 100, 300];
arr.splice(2, 0, 10000); 

console.log(arr);


// 문제 8 : 객체의 키 이름 중복 
// 객체에서 키 이름이 중복될 경우 뒤에 위치한 키 값이 출력 된다. 즉 84 return 
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

// 문제 9: concat을 활용한 출력 방법 
//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

// 문제 10: 별 찍기 (PASS 다시 시도하기)

// 문제11: for를 이용한 기본 활용 

let s = 0;

for (i=1; i <= 100; i++){
  s += i
}

console.log(s)


//문제13: 몇 번째 행성인가요? 

let planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']

const n = prompt('몇 번째 행성인가요?');

console.log(planet[n-1]); // index 번호로 호출 해야함 

//문제 14: 3의 배수인가요? 

const num1 = prompt('3의 배수인가요?');

if (num1 % 3 ===0){
  console.log('짝')
}else{
  console.log(num1)
}


//문제15: 자기소개 

const names = prompt('이름을 입력해주세요.');

console.log(`안녕하세요. 저는 ${names} 입니다.`)


//문제16: 로꾸거

const para = prompt('입력하세요.');

const reverseString = para.split('').reverse().join('');

console.log(reverseString);


// 문제17: 놀이기구 키 제한 
const height = prompt('키를 입력하세요.');

(height >= 150)? console.log('YES') : console.log('NO');

//문제18: 평균 점수 (my answer)
const score = prompt('세 과목의 점수를 입력하세요.').split(' ').map(Number);
let sumAvg = Math.floor(score.reduce((a,b)=> a+b, 0) / score.length)
console.log(sumAvg);

//문제18: 평균 점수 (textbook answer)
const scoreList = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

// 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
for (let i=0; i<3; i++){
  sum += parseInt(scoreList[i], 10);
}

//Math.floor 메서드는 소수점 자리를 모두 버림합니다.
console.log(Math.floor(sum/3)); 


//문제 19: 제곱을 구하자 
let num2 = prompt('숫자를 입력하세요').split(' ').map(Number);
let [a, b] = num2; // 자바스크립트의 구조 분해 할당 

console.log(Math.pow(a,b))

//문제20: 몫과 나머지 
let num3 = prompt('숫자를 입력하세요').split(' ');
console.log(parseInt(num3[0]/num3[1]) + ' ' + parseInt(num3[0]% num3[1]))

//문제24: 대문자로 바꿔주세요! 
let nameInput = prompt('이름을 입력하세요');
console.log(nameInput.toUpperCase());

//문제25: 원의 넓이를 구하세요
function circle(radius){
  return Math.PI * radius * radius
}

console.log(circle(prompt()))

//문제 26: 행성 문제2 - 객체(Object)를 사용하면 되는 문제!! 

const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const namePlanet = prompt("행성의 이름을 입력하세요.");

console.log(planets[namePlanet]);

//문제 27: 객체 생성 
const keys = prompt("이름을 입력하세요.").split(' ');
const values = prompt("점수를 입력하세요.").split(' ');
const obj = {};

for (let i=0; i <keys.length; i++){
  obj[keys[i]] = Number(values[i]);
}

console.log(obj);


//문제28: 2-gram
const data = prompt("문자열을 입력하세요.").split("");

for (let i=0; i < data.length-1; i++){
  console.log(data[i], data[i+1])
}

//문제 29: 대문자만 지나가세요
const alphabet = prompt('알파벳을 입력하세요.');

if (alphabet === alphabet.toUpperCase()){
  console.log("YES");
}else{
  console.log("NO");
}

//문제 30: 문자열 속 문자 찾기 - indexOf()의 기능
const phrase = prompt("문자열을 입력하세요.");
const word = prompt("찾을 단어를 입력하세요.");

/* indexOf():메서드는 호출한 스트링 객체나 배열에서 
주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환
존재하지 않으면 -1을 반환
*/

console.log(phrase.indexOf(word));

//문제32: 문자열 만들기 
const strings = prompt('문자열을 입력하세요.').split(' ');

console.log(strings.length);

//문제33: 거꾸로 출력하기

const number = prompt('숫자를 입력하세요.').split('').reverse();
let result ='';

for (let i=0; i < number.length; i++){
  result += number[i];
}
console.log(string);


//문제34: sort 구현하기 (오름차순)
const unsorted = prompt("키를 입력하세요.");
// sort함수는 기존의 element를 수정하기 때문에 다른 변수에 복사후 적용해줌 
const sorted = unsorted.split(' ').sort((a, b) => a - b).join(' '); 

if (unsorted === sorted){
  console.log("YES")
}else{
  console.log("NO")
}


//문제36: 구구단 출력하기 
function gugudan(n){
  let result=''; 
  for (let i=1; i <10; i++){
    result += i * n + ' ';
  }
  return result
}

console.log(gugudan(2))

//문제37: 반장 선거 
const keys1 = prompt("투표해 주세요.").split(' ');
const obj1 = {};

for (let i=0; i <keys.length; i++){
  if (keys1[i] in obj1){
    obj1[keys1[i]] += 1;
  }else {
    obj1[keys1[i]] = 1;
  }
}

// reduce 메소드를 기억하기!!
let winner = Object.keys(obj).reduce(function(a, b){
  return obj[a] > obj[b] ? a : b
});

console.log(`${winner}(이)가 총 ${obj[winner]}표로 반장이 되었습니다.`);

//문제 38: 호준이의 아르바이트
const scores = prompt("점수를 입력하시오").split(' ');

//sort 사용해서 점수를 순서대로 나열하기 
scores.sort((a,b) => b-a);

// 중복을 제거한 top3 값 확인 하기 
let top3 = scores.filter((v,i) => scores.indexOf(v) === i).slice(0,3);

// scores가 value 값에 포함되어 있는 개수 세기 
let ind = 0;
let counts = 0;

for(let ind = 0; ind < scores.length; ind++){
  let n = scores[ind];
  if(top3.includes(n)){
    count += 1;
  }
}

// array.prototype.includes() : 배열 안에 차는 요소가 있는지 파악후 true, false 값으로 돌려줌 
console.log(count);

// 문제39:오타 수정하기 
const string = prompt("입력하세요");

// .replace는 첫번째로 발견되 문자열만 치환 
console.log(string.replace('q', 'e'));

// 문자열 전체를 치환하기 위해서는, 정규식을 사용해야한다. 
console.log(string.replace(/q/g,'e'));

let total = 0;
let count = 0;
let i = 1;

//문제 40: 놀이동산에 가자 
const limit = prompt('제한 무게를 입력하세요.');
const numberPeople = prompt('인원수를 입력하세요.');


for (let i=1; i<=numberPeople; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);

//문제 41: 소수판별 
const num = Number(prompt("숫자를 입력하세요."));
console.log(num)

// 1과 자기 자신만으로 나눠지는지 검사 
function check_prime(num) { 
  if (num === 1){
    return false;
  }
  
  for (let i=2; i<num; i++){
    if(num % i ===0){
      return false;
    }
  }
  return true;
}

console.log(check_prime(num));

//문제 42: 2020년 
const month = prompt('월을 입력하세요.');
const days = prompt('일을 입력하세요.');

function solution(a,b){
  const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  
  const day = new Date(2020, a-1, b)
  return week[day.getDay()];
}

console.log(solution(month,days))

//문제 43: 10진수를 2진수로 
const dec = Number(prompt("10진수를 입력"));
console.log(dec.toString(2));

//문제 44: 각 자리수의 합 
const num5 = prompt('숫자를 입력').split('').map(Number);

let sumNumber = 0;
for (let i=0; i<num5.length; i++){
  sumNumber += num5[i]
}

console.log(sumNumber);

// 문제 45: getTime()함수 사용하기 

// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
const d = new Date();
let years = Math.floor(d.getTime() / year) + 1970;

console.log(years);

//문제 46: 각 자리수 합 
let arr = [];
let arrSum = 0;

// 숫자를 나열한 배열 생성하기 
for (let i=1;i<=20; i++){
  arrSum.push(i)
}

/* forEach()는 배열의 element에 적용하는 메서드
1) arr의 element 한개를 'n'으로 정의 
2) n % 10 을 통해 나머지 값을 sum에 저장 
3) Math.floor(n/10)을 통해 10의 자리수 추출 
4) 3번을 통해 나온 n을 다시 while문에 넣어서 0이 될때까지 반복
예시) n = 18, 2번) sum += 8 3번) n = 1 
-while 문 - 2번) sum += 1 3번) n =0 --while 문--
n = 19...  */

arrSum.forEach((n)=>{
  while(n!=0){
    sum += (n%10);
    n = Math.floor(n/10);
  }
})

console.log(sum);

//문제 47: set 자료 응용형 
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};

// 중복을 제거하는 Set 생성 
let results = new Set();
// people에 있는 key의 값을 result에 저장 
for (let key in people) {
  results.add(people[key]);
}
console.log(results.size);

//문제 48: 대소문자 바꿔서 출력 : string index를 확인하고 새로운 문자열로 생성
let words = prompt('문자를 입력해주세요.');
let change = '';

for (let i=0; i <words.length; i++){
  if (words[i] !== words[i].toUpperCase()){
    change += words[i].toUpperCase()
  }else{
    change += words[i].toLowerCase()
  }
}

console.log(change)

//문제 49: 최댓값 구하기 (내 답안) 
const numList = prompt('숫자를 입력하세요.').split(' ');

//Math.max는 배열형태를 분류할 수 없음으로 속성 변경 
const max = Math.max(...numList); 
console.log(max);

// 교제 답안 : string 값을 int로 변환했고, sort로 내림차순으로 분류
let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
  return parseInt(n, 10);
});

numbers.sort((a, b) => {
  return b-a;
});

console.log(numbers[0]);

//문제 50: 버블정렬 구하기 
function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length-i; j++) {
      if (result[j] > result[j + 1]) {
        let tmp = result[j];
        result[j] = result[j+1]
        result[j+1]=tmp
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));