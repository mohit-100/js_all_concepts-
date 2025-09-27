function TwoSum(nums,target) {
    
    let mp = new Map();

    for(let i = 0 ; i < nums.length;i++){

        let uncompelete = target - nums[i];

        if(mp.has(uncompelete)){
             return [mp.get(uncompelete),i];
    }
      mp.set(nums[i],i);
   }
    return - 1;
}

let nums = [4,5,6];
let target = 10 

const result = TwoSum(nums,target);
console.log(result);