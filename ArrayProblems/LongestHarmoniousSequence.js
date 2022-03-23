/*
Ques:: https://leetcode.com/problems/longest-harmonious-subsequence/submissions/
*/

var findLHS = function(nums) {
    let map = {};
    let longestSequence = 0;
    for (let item of nums) {
        map[item] = map[item] ? (map[item] + 1) : 1; /* store the number with their corresponding count */
    }
    
    for (let key in map) {
        const next = parseInt(key) + 1; 
        if (map[next]) {                    /* check if number exists by adding 1 to the current item */
            if ((map[key] + map[next]) > longestSequence) {  /* If the sum of the two number is greater than the longest the update the longest */
                longestSequence = map[key] + map[next];
            }
        }
    }
    
    return longestSequence;
};
