// 🔢 1. Max Consecutive Ones (Leetcode 485)
// Problem: Given a binary array, find the maximum number of consecutive 1s.

const { count } = require("console");

// txt
// Copy
// Edit
// Input: [1,1,0,1,1,1]
// Output: 3

const arr = [1,1,0,1,1,1,0,0,1,1,0,1,1,1,1];

function FindConsecutiveOne(arr){

    let count_1 = 0 ;
    let maxOne = 0 ;
     for(let i = 0 ; i < arr.length;i++){
           if(arr[i] === 1){
              count_1++;
           } else{
             count_1 = 0;
           }
            maxOne = Math.max(count_1 , maxOne);
     }
     return maxOne;
}

console.log(FindConsecutiveOne(arr));