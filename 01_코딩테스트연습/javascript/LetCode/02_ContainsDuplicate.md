## Problem 📣

Given an integer array nums, **return true** if any value appears at least twice in the array, and return false if every element is distinct.

```
Input: nums = [1,2,3,1]
Output: true
```

```
Input: nums = [1,2,3,4]
Output: false
```

<br>

## My Solution 📌

```jsx
const containsDuplicate = (nums) => {
  const arr = [];
  for (i in nums) {
    nums.filter((num) => num === nums[i]).length > 1 && arr.push(nums[i]);
  }
  return arr.length > 0 && true;
};
```

`filter`를 사용해서 nums에 들어있는 요소들의 중복을 확인하고, 그 길이가 1이 넘으면 (= 중복이 있으면) 빈 배열인 `arr`에 요소를 넣었다. 마지막으로 arr.length 확인을 통해 중복인 경우 **true**를 반환 하게 된다.

<br>

〰️ 시간이 오래 걸려 정답 확인이 어려웠음...

<br>

## Solution 💬

```jsx
var containsDuplicate = function (nums) {
  const set = new Set([...nums]);
  return set.size != nums.length;
};
```

자바스크립트에서 `Set` 객체는 중복되지 않는 유일한 값들의 집합을 뜻한다. 배열인 nums를 중복되지 않는 값들로 나열하기 위해 `set`으로 변경하게 된다. 이후, 원본(nums)의 길이와 중복을 제외한 값들의 집합의 길이를 비교해 그 결과를 return 하게 된다.

➕ set 객체는 중복을 허용하지 않는다. `new Set()` 생성자를 통해 중복값을 제거
<br>
➕ `set객체.size` 요소의 개수를 확인할 수 있다.

---

<br>

## 참고자료 📚

- https://velog.io/@dolarge/Java-Script-Set-%EA%B3%BC-Map
- https://relatablecode.com/javascript-leetcode-contains-duplicate
