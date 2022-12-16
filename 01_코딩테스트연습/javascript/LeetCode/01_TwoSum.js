/* Two Sum : target 값을 만들 수 있는 배열 요소 index 찾아오기
두 번째 for문에서 index를 만드는 부분을 유의해야함! 
*/

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++){
        if(nums[i] + nums[j] === target){
          return [i, j]
        }
      }
    }      
}
    

let nums = [3,2,4]
let target = 6

console.log(twoSum(nums,target));
