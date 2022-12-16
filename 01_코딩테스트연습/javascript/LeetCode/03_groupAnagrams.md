## Problem 📣

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

<br>

## My Solution 📌

동기들과 함께 풀은 답변..

```jsx
const groupAnagrams = (strs) => {
  const arr = [
    ...new Set(
      strs.map((str) => {
        return str.split("").sort().join("");
      })
    ),
  ];
  const result = [];
  for (let i of arr) {
    let a = [];
    for (let str of strs) {
      if (i === str.split("").sort().join("")) {
        a.push(str);
      }
    }
    result.push(a);
  }
  return result;
};
```

`arr`는 strs에 있는 요소들을 순서대로 정렬한 후 중복되지 않도록 만든 배열이다. 이후, arr의 요소들과 strs(원래 배열)에 들어 있는 요소들을 비교하며 같은 경우 배열 `a`에 push 하게 된다. 마지막으로 만들어진 배열 `a`를 전체 `result` 배열에 한 번 더 push 함으로 원하는 결과값을 얻을 수 있다.

<br>

〰️ 시간이 오래 걸려 정답 확인이 어려웠음... (111/120 passed)

<br>

## Solution 💬

```jsx
const groupAnagrams = (strs) => {
  const mapping = {};
  for (let str of strs) {
    const sorted = str.split("").sort().join("");
    if (mapping[sorted] !== undefined) {
      mapping[sorted].push(str);
    } else {
      mapping[sorted] = [str];
    }
  }
  return Object.values(mapping);
};
```

Object의 성질을 활용해서 풀이한 내용이다. 먼저 strs의 요소를 순서대로 정렬한 (sorted)를 `mapping` Object의 key 값으로 지정한다. 이후, 키 값의 value가 존재하면, 그 배열(값)에 push 하고, 없는 경우 배열로된 value를 만들어 주게 된다. 이후, Object의 `value` 만 가져오게 되면, 우리가 원하는 값을 가질 수 있다.

<br>

➕ Object의 key-value를 사용해 값을 정의하고 비교하고 찾을 수 있다. 복잡한 for loop 등의 반복문을 사용하지 않아도 된다.

---

<br>

## 참고자료 📚

- https://leetcode.com/problems/group-anagrams/solutions/19441/simple-javascript-solution/?languageTags=javascript
