// class MyArray extends Array {
//     constructor(...args) {
//         super(...args);
//     }

//     myFilter(callback) {
//         if (typeof callback !== "function") {
//             throw new TypeError("Callback must be a function");
//         }

//         let temp = [];
        
//         for (let i = 0; i < this.length; i++) {
//             if (callback(this[i], i, this)) {
//                 temp.push(this[i]);
//             }
//         }
        
//         return temp;
//     }
// }

// const nums = new MyArray(1, 2, 3, 4, 5, 6);


// const result = nums.myFilter(num => num % 2 === 0);
// console.log(result); 


// // console.log(nums.myFilter()); 


let yes = "mohit";

console.log(window.yes);