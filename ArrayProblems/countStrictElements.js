/*
Ques::: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
*/

var countElements = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let count = 0;
    
    nums.forEach(item => {
        if(item > min && item < max) count++;
    });
    
    return count;
};
