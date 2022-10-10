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

const n = prompt('3의 배수인가요?');

if (n % 3 ===0){
  console.log('짝')
}else{
  console.log(n)
}


//문제15: 자기소개 

const name = prompt('이름을 입력해주세요.');

console.log(`안녕하세요. 저는 ${name} 입니다.`)


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
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

// 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
for (let i=0; i<3; i++){
  sum += parseInt(scores[i], 10);
}

//Math.floor 메서드는 소수점 자리를 모두 버림합니다.
console.log(Math.floor(sum/3)); 


//문제 19: 제곱을 구하자 
let num = prompt('숫자를 입력하세요').split(' ').map(Number);
let [a, b] = num; // 자바스크립트의 구조 분해 할당 

console.log(Math.pow(a,b))

//문제20: 몫과 나머지 
let num = prompt('숫자를 입력하세요').split(' ');
console.log(parseInt(num[0]/num[1]) + ' ' + parseInt(num[0]% num[1]))

//문제24: 대문자로 바꿔주세요! 
let name = prompt('이름을 입력하세요');
console.log(name.toUpperCase());

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

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);

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
const string = prompt('문자열을 입력하세요.').split(' ');

console.log(string.length);

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
const keys = prompt("투표해 주세요.").split(' ');
const obj = {};

for (let i=0; i <keys.length; i++){
  if (keys[i] in obj){
    obj[keys[i]] += 1;
  }else {
    obj[keys[i]] = 1;
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
let i = 0;
let count = 0;

for(let i = 0; i < scores.length; i++){
  let n = scores[i];
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
const n = prompt('인원수를 입력하세요.');


for (let i=1; i<=n; i++){
  total += parseInt(prompt('무게를 입력해주세요.'), 10);
  if (total <= limit){
		count = i;
  }
}

console.log(count);