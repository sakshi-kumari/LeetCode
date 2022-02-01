Ques::: https://leetcode.com/problems/intersection-of-two-arrays-ii

var intersect = function(nums1, nums2) {
    const arr1 = nums1.length;
    const arr2 = nums2.length;
    let arrToIterate, arrToCheck;
  
  /* check on which array to iterate */
    if(arr1 < arr2) {
        arrToIterate = nums1;
        arrToCheck = nums2;
    } else {
        arrToIterate = nums2;
        arrToCheck = nums1;
    }

    let resultArray = [];
    
  /* Functionality to push the common element in both the arrays as many times it appears*/
    arrToIterate.forEach( item => {
        if(arrToCheck.includes(item)) {
            resultArray.push(item);
            delete arrToCheck[arrToCheck.indexOf(item)];
        }
    });
    
    return resultArray;
};
