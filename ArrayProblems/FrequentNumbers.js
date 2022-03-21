/*
Ques:: https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/ 
*/

var mostFrequent = function(nums, key) {
    let tmap = {};
    for (let i=0; i<nums.length-1; i++){
        if (nums[i] === key) {
            tmap[nums[i+1]] = (tmap[nums[i+1]] ? (tmap[nums[i+1]] + 1) : 1); /* map to store the count of all the targets */
        }
    }
    
    let target = 0;
    let max = 0;
    for (const key in tmap) {
        if(tmap[key] > max) {
            target = key;
            max = tmap[key];
        }
    }
    
    return target;
};
