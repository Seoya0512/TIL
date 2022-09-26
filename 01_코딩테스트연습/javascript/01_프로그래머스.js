// 짝수 홀수 

function solution(num) {
    var answer = '';
    if (num % 2 === 0){
        answer = 'Even'
    } else {
        answer = 'Odd'
    }
    return answer;
}

// 문자열을 정수로 바꾸기 : Numbers 의 메소드 사용하기 

function solution(s) {
    var answer = 0;
    answer = Number(s);
    return answer;
}

// 자연수 뒤집어 배열로 만들기 : map 함수 사용, 새로운 배열 생성 
function solution(n) {
    let answer = String(n).split("").reverse().map((n) => {return Number(n)});
    return answer;
}

// 나누어 떨어지는 숫자 배열 
function solution(arr, divisor) {
    var answer = [];
    for (i = 0; i < arr.length ; i ++){
        if (arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }
    if (answer.length === 0) {
        answer = [-1]
    }

    return answer.sort((a, b)=>a - b);
}


// 나누어 떨어지는 숫자 배열  : filter 사용하신 어떤 분.. 대박임..
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

// 자릿수 더하기 
function solution(n){
    let answer = 0;
    let num = n.toString().split('');
    for (let i = 0; i < num.length; i++){
      answer += Number(num[i])
    }
    return answer
  }

// 나머지가 1이 되는 수 찾기
function solution(n){
    for (let i = 1; i <= n; i++){
      if (n % i === 1) return i;
    }
  };