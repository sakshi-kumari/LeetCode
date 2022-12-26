Question: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

Solution:
var smallerNumbersThanCurrent = function(nums) {
    let sortedArray = [...nums];
    let mapObj = {};

    sortedArray.sort((a,b) => {return b-a;});
    for (let i = 0; i<sortedArray.length; i++) {
        mapObj[sortedArray[i]] = sortedArray.length - i -1;
    }

    for (let i=0; i<nums.length; i++) {
        nums[i] = mapObj[nums[i]];
    }

    return nums;
};
