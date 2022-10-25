/* 대문자 소문자 관계 없이 파악하기 때문에 하나로 통일한 후, 각가의 갯수를 셀 수 있도록 함*/

function solution(s){
    var answer = true;
    let countP = 0;
    let countY = 0;
    let upperS = s.toUpperCase();
    
    for (i=0; i < upperS.length; i++) {
      if (upperS[i] === "P"){
        countP ++
      } else if (upperS[i] === "Y") {
        countY ++
      }
    }
      
    if (countP === countY){
      return answer 
    } else {
      answer = false;
    } return answer;
}

/* split 사용해서도 풀 수 있다는 놀라운 사실*/
function solution(s){
    if(s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length){
        return asnwer
    } else {
        answer = false;
    } 
    return answer;
}