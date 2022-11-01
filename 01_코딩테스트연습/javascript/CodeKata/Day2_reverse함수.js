/* reverse 함수에 정수인 숫자를 인자로 받습니다. 그 숫자를 뒤집어서 return해주세요.

    x: 숫자 return: 뒤집어진 숫자를 반환!

    예들 들어, x: 1234 return: 4321

    x: -1234 return: -4321

    x: 1230 return: 321 */


// Trial 1 : 정수가 음수인 경우와 양수인 경우를 분리해서 확인 
// 정수를 문자열로 반환하고, 뒤집어 준다. 음수의 경우 -1을 제거해야 하기 때문에 pop()을 사용해서 제거
// 이후, 다시 음수를 만들기 위해 -1을 곱해준다. 

const reverse1 = x => {
    if (x < 0) {
        let result = String(x).split('').reverse()
        result.pop()
        return Number(result.join(''))*-1
    } else {
        return Number(String(x).split('').reverse().join(''))
    }
}

// 최종 answer
const reverse2 = x => {
    let result = String(Math.abs(x)).split('').reverse().join('');
    return (x < 0)? result*-1 : result-0
  }
  