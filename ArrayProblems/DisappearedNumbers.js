/*
Ques:: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
*/

var findDisappearedNumbers = function(nums) {
    const arr = [];
    for(let i=1; i<=nums.length; i++){
      arr.push(i);
    }
    const resultArr = arr.filter(x => !nums.includes(x));
    return resultArr;
};
