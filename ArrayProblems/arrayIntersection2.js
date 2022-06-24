Ques::: https://leetcode.com/problems/intersection-of-two-arrays-ii

Solution 1:


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


Solution 2:


var intersect = function(nums1, nums2) {
    let nums1Map = {}; let intersection = [];
    for (let item of nums1) {
        if (nums1Map[item]) {
            nums1Map[item]++;
        } else {
            nums1Map[item] = 1;
        }
    }
    
    
    for (let item of nums2) {
        if(nums1Map[item] !== 0 && nums1Map[item] !== undefined) {
            intersection.push(item);
            nums1Map[item]--;
        }
    }
    
    return intersection;
};
