/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = nums => nums.length * (nums.length + 1) / 2 - nums.reduce((a,b)=>a+b,0);
