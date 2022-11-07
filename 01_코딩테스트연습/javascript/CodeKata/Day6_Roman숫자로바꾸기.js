// Roman 숫자표기를 아라비아 숫자로 변환 시키는 문제 
// POINT 1 : obj로 접근하기 
// POINT 2: map 함수를 사용해서, 각가의 요소를 변환하기 
// POINT 3: IV(4), IX(9) 숫자들 경우의 수 따지기 
// POINT 3-1 : 두 숫자의 경우, 작은 숫자가 먼저 나오고 이후에 나오는 큰 숫자에서 작은 수를 뺀다. 

function romanToNum(s) {
    const obj= {
      "I" : 1,
      "V" : 5,
      "X" : 10,
      "L" : 50,
      "C" : 100,
      "D" : 500,
      "M" : 1000
    }
    
    let result = 0;
    const romanArr = s.split('');
    const numArr = romanArr.map(ele => obj[ele]);
    
    for (let i = 0; i < numArr.length; i++){
      if (numArr[i] < numArr[i+1]){
        result -= numArr[i]
      } else{
        result += numArr[i]
      }
    }
    return result;
  }