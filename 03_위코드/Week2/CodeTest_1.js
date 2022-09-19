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