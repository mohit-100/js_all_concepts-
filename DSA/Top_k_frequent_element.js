class Solution {
    topKFrequent(nums, k) {
        let map = {};

        // Count frequency
        for (let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        // Convert to array of [num, freq] and sort by freq descending
        let sorted = Object.entries(map).sort((a, b) => b - a);
          console.log("sorted->",sorted);
        // Take top k numbers
        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(Number(sorted[i][0]));
        }

        return result;
    }
}

// Example
let sol = new Solution();
console.log(sol.topKFrequent([1,1,1,2,2,3], 2)); // Output: [1,2]
