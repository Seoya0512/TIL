//문제 53번: 괄호 문자열 (바른 문자열 만들기)

function mathBrackets(brackets){
    let count = 0;
    
    //1. 괄호 개수가 같은지 확인
    for(let i=0; i<brackets.length; i++){
      if (brackets[i] === '('){
        count += 1;
      }
      if (brackets[i] === ')'){
        count -= 1;
      }
    }
    // 2. '(' 과 ')'이 한 쌍으로 들어있지 않으면 false
    if (count !== 0){
      return false;
    }
   
    // 3. 괄호의 모양이 순서대로 알맞게 배치 됐는지 확인
    let container = [];
    for (let i in brackets){
      if(brackets[i] === '('){
        container.push(brackets[i]); // container = ["("]
      }
      if(brackets[i] === ')'){
        //3-1. "(" 이 먼저 배치 되지 않은 경우 false
        if(container.length === 0){
          return false;   
        }
        // reset container
        container.pop();
      }
    }
    return true;
  }
      
          
  const sample = prompt("괄호를 입력하세요.").split('');
  
  if (mathBrackets(sample) === true){
    console.log("YES");
  }else{
    console.log("NO");
  }