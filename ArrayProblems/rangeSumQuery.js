/* 
Ques:: https://leetcode.com/problems/range-sum-query-immutable/submissions/ 
*/
var NumArray = function(nums) {
    this.data = nums; 
    this.leftSums = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        this.leftSums.push(sum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.leftSums[right] - this.leftSums[left] + this.data[left];
};
