/*
Ques:: https://leetcode.com/problems/third-maximum-number/submissions/
*/

var thirdMax = function(nums) {
    let uniqueArr = [...new Set(nums)];
    uniqueArr.sort( (a,b) => {
        return a-b;
    });
    
    if (uniqueArr.length >= 3) {
        return uniqueArr[uniqueArr.length - 3]
    } else {
        return Math.max(...uniqueArr);
    }
    
};
