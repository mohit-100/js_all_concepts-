// 🔁 2. Max Consecutive Ones II (Leetcode 487)
// Problem: You can flip at most one 0. Find the maximum number of consecutive 1s.

// txt
// Copy
// Edit
// Input: [1,0,1,1,0]
// Output: 4

const arr = [1,0,1,1,0];
function oneFilp(arr){
    let maxOne = 0 ;
    let count_1 = 0 ;
    let count_One_Zero = 0 ;
    let r = 0 ,l = 0 ;
   for( ;r < arr.length;r++){
        //   count_1++;
          if(arr[r] === 0) count_One_Zero++;
         for(;count_One_Zero > 1 ;l++){
              count_One_Zero--;
         }
      }
        maxOne = Math.max(maxOne , r-l);
   
   return maxOne;
}

console.log(oneFilp(arr))