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
