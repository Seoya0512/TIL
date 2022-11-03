// 문제 : 숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.


// 해설 : 숫자 인자를 문자열로 치환하고 배열로 바꾼다. 이후 .reverse() 메소드를 사용 
// 깨달은 점 : 비교 연산자에서 == 는 truthy 와 falsy를 반환하기 때문에 숫자와 문자열도 비교
const sameReverse = num => {
    const numReverse = String(num).split('').reverse().join('');
    return (num == numReverse)? true: false
  }
  