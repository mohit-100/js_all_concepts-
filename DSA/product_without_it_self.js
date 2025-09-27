function productExceptSelf(nums) {
        let n= nums.length;
        let  prefix = [];
         prefix[0] = 1;
        let sufix = [];
         sufix[n-1] = 1
         let res = new Array(n);

         for(let i = 1 ; i < nums.length ; i++){
               prefix[i] = nums[i-1] * prefix[i-1];
         }

         for(let i = n-2 ; i >= 0 ; i--){
              sufix[i] = sufix[i+1] * nums[i+1] 
         }

         for(let i = 0 ; i < nums.length;i++){
              res[i] = prefix[i] * sufix[i];
         }
       
        return res;
    }

    const  nums =[1,2,3,4];

    const answer = productExceptSelf(nums);
    console.log(answer)

   function  productExceptSelf_with_Division(nums) {
        let prod = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num !== 0) {
                prod *= num;
            } else {
                zeroCount++;
            }
        }

        if (zeroCount > 1) {
            return Array(nums.length).fill(0);
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = nums[i] === 0 ? prod : 0;
            } else {
                res[i] = prod / nums[i];
            }
        }
        return res;
    }




  const  num =[1,2,3,4];

 const  result = productExceptSelf_with_Division(num);
    console.log(result)
    