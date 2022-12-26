Question: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

Solution:

var kidsWithCandies = function(candies, extraCandies) {
    const greatestCandies = Math.max(...candies);
    let res = [];
    
    for (let item of candies) {
        if ((item + extraCandies) >= greatestCandies) {
            res.push(true);
        } else {
            res.push(false);
        }
    }

    return res;
};
