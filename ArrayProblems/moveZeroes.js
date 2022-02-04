Ques::: https://leetcode.com/problems/move-zeroes

var moveZeroes = function(nums) {
    let p1 = 0;
    let p2 = 1;
    
    while(p2 < nums.length) {
        if(nums[p2] === 0 || p1 > p2) { // p2 will always point to the non-zero integer
            p2++;
        } else if (nums[p1] === 0) { // swap the zeros with the non-zero integer
            const c = nums[p2];
            nums[p2] = nums[p1];
            nums[p1] = c;
        } else {
            p1++;
        }
    }
    
    return nums;
};
