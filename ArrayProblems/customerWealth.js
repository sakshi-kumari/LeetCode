Question: https://leetcode.com/problems/richest-customer-wealth

Solution:
var maximumWealth = function(accounts) {
    let maxWealth = 0 ;
    let m = accounts.length;
    let n = accounts[0].length;
    for (let i=0; i<m; i++) {
        let currWealth = 0;
        for (let j=0; j<n ; j++) {
            currWealth += accounts[i][j];
        }
        if (currWealth > maxWealth) {
            maxWealth = currWealth;
        }
    }

    return maxWealth;
};
