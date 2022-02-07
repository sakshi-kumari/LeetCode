/*
 Ques::: https://leetcode.com/problems/keep-multiplying-found-values-by-two
 */

var findFinalValue = function(nums, original) {
    while(nums.includes(original)) {
        original = 2*original;
    }
    
    return original;
    
};
