Question: https://leetcode.com/problems/number-of-good-pairs

Solution:
var numIdenticalPairs = function(nums) {
    let mapObj = {};
    let pairs = 0;
    for (let i=0; i<nums.length; i++) {
        if (mapObj[nums[i]]) {
            pairs += mapObj[nums[i]];
            mapObj[nums[i]]++;
        } else {
            mapObj[nums[i]] = 1;
        }
    }
    
    return pairs;
};
