Ques::: https://leetcode.com/problems/summary-ranges

var summaryRanges = function(nums) {
    
    const finalArray = [];
    
    for(let i=0; i< nums.length; i++ ) {
        let item = nums[i];
        let j = i;
        while ((nums[j+1] - nums[j]) == 1) { /*Keep iterating to cover the all the numbers in the range*/
            j++;
        }
        
        if(nums[j] !== nums[i]) {
            item = item + '->' + nums[j];
            i=j;
        }
        
        finalArray.push(String(item));

    }
   
    return finalArray;
    
}
