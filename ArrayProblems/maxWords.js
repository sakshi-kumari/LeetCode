Question: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

Solution:
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for (let sentence of sentences) {
        let currLength = sentence.split(' ').length;
        if (currLength > maxWords) {
            maxWords = currLength;
        }
    }

    return maxWords;
};
