// 🪟 3. Longest Subarray of 1's After Deleting One Element (Leetcode 1493)
// Problem: Delete one element, return the length of the longest subarray containing only 1s.

// txt
// Copy
// Edit
// Input: [1,1,0,1]
// Output: 3
const arr = [1,1,0,1];
function longSubarray(arr){
    let r = l = 0; 
    let count_0 = 0;
    let maxOne = 0 ;
    for(;r < arr.length;r++){
        if(arr[r] === 0) count_0++; 
        for(; count_0 > 1 ; l++){
            if(arr[l] === 0)
             count_0--;
        }
        maxOne = Math.max(maxOne , r-l );
    }
    return maxOne;
}

console.log(longSubarray(arr));
