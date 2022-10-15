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

  //문제 54: 연속되는 수

  function check(num){
    // 스탬프 숫자가 오름차순 정렬
    num.sort((a,b) => a-b)
    
    // 연속적인 숫자인지 확인 
    for(let i=0; i< num.length -1; i++){
      if (num[i]+1 !== num[i+1]){
        return "NO"
      }
    }
     return "YES"
  }
  
  // 스탬프 숫자 입력
  const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));

  console.log(check(n));
  

  // 문제 56: 객체의 험수 응용 (풀이)
  const nationWidth = {
         'korea': 220877,
         'Rusia': 17098242,
         'China': 9596961,
         'France': 543965,
         'Japan': 377915,
         'England' : 242900,
    }
    
    // 고정값 정해주고, 필요 없는 속성 지움
    const fixed = nationWidth['korea'];
    delete nationWidth['korea']; 
    
    // Object.entries(): 객체를 Array로 전달함으로, 접근을 조금 더 용이하게 만들어줌 
    const entry = Object.entries(nationWidth); 
    // Object.values(): 객체의 값만 뽑아 Array로 전달
    const values = Object.values(nationWidth); 
    
    // 최댓값 설정 (조건문을 위해 임의로 설정)
    let gap = Math.max.apply(null, values);
    let item = [];
    
    // 값 비교를 통해 결국 최소값을 찾게됨
    for(let i in entry){
      if(gap > Math.abs(entry[i][1] - fixed)){
        gap = Math.abs(entry[i][1]- fixed);
        item = entry[i]
      }
    }
    
    console.log(item[0], item[1]- fixed);