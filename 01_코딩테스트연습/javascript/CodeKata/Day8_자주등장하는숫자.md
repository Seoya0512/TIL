### **문제❓**

`nums`는 숫자로 이루어진 배열입니다. 가장 자주 등장한 숫자를 `k` 개수만큼 return해주세요.

```
nums = [1,1,1,2,2,3],
k = 2

return [1,2]

nums = [1]
k = 1

return [1]
```

<br>


### My Answer 📌

```jsx
function topK(nums,k) {
    const set = new Set(nums);
    const unique = [...set];
  
    const countObj = {};

    for (let i =0; i < unique.length; i++){
    let count = 0
    for (let j =0; j < nums.length; j++){
      if (unique[i] == nums[j]){
        count += 1 
      }
    }
    countObj[unique[i]] = count;
    }

    const result = [];

    const arr = Object.values(countObj).sort((a,b) => b-a);
    for (let i =0 ; i < k ; i++){
      Object.keys(countObj).find(key => {
        if(countObj[key] === arr[i]){
          result.push(parseInt(key))
        }
      })
  }
  return result;
}
```

<br>

해당 코드는 크게 두 부분으로 나눠질 수 있다. 1) nums의 각 요소의 개수를 카운팅  2) 가장 자주 등장하는 값을 k개 만큼 구하기 

<br>

먼저 (1) 파트를 설명해 보자면, 

1. nums 배열에서 중복을 제거한 `unique` 배열을 생성  
2. `countObj` 은 unique 배열을 key로 가지고, nums 배열에 각 프로퍼티가 들어 있는 숫자를 value 로 가진다.
3. 이중 for 문을 통해서 각 element의 숫자를 count 하고, 그 값을 countObj의 프로퍼티 값으로 넣어 준다.

<br>

**객체를 사용한 이유?** 

→ 처음에는 배열을 사용해서 해당 구문을 풀이하려고 했지만, count값이 있는 배열에서는 그에 상응하는 숫자를 가져오기 힘들다고 판단했다. 그래서 key 값 과 value 값이 함께 사용되는 Object 타입을 선택 했음 

<br>

```jsx
// 어떤 숫자가 3번 카운트 됐는지 지정하기 어려움 
countArr = [3, 2, 1] 

// 숫자 1이 3번 카운팅 됨을 바로 확인할 수 있음 
countObj = {
	"1" : 3,
	"2" : 2,
	"3" : 1
} 
```

<br>

두번째 파트로 넘어가서, 

1. `result` 라는 빈 배열에는 k 값 만큼의 원하는 값이 push를 통해 들어갈 예정이다. 
2. `arr` 변수는, countObj의 value 값을 가져와서 이를 “내림차순”으로 만든다.  그 이유는, 카운트 숫자가 클 수록 자주 등장했다는 뜻이기 때문에 배열의 맨 앞 부터 값을 가져오기 위함 
3. value에 맞는 key 값을 가져오기 위해 `.find` 라는 메소드를 사용해서 countObj[key]값을 찾아서 key가 갖고 있는 value와 내 value를 비교해 맞으면, key 값을 `result` 에 push 한다. 
4. 마지막으로 key 값은 String 타입이기에 parseInt를 통해 정수로 변환 했다. 

<br>

```jsx
// Object value로 key 값을 찾는 방법 

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

```

<br>

참고 사이트 : [https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value](https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value)