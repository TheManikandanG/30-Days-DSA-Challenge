// Check if pair with the given Sum exists in Array
// Pair with given Sum (Two Sum)

// Ex
// Input: arr[] = {0, -1, 2, -3, 1}, target = -2
// Output: True
// Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2


function twoSum(arr, target) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
      
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    return false;
}

let arr=[0,-1,2,-3,1]
let target=-2

console.log(twoSum(arr,target));
