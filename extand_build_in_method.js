// class date {
//     numner ;
//     char ; 
//     constructor(no,str){
//        this.numner = no;
//        this.char = str;

//     }

//     getPropertys(){
//         console.log("date->");
//     }
// }

// class second {
//      constructor(){}
//   }

//    let newclass = new second();

// const propertys = new date(12,"string");

//  const data = Object.keys(propertys);
//   data.map((datas)=> newclass = datas);

//   console.log(newclass)


  
// let count = {};

// let arr = [1,2,5,5,2,8,9];
// let newdata ;

// for(let i = 0 ; i < arr.length ; i++){
//        count[arr[i]]++;

//        if(arr[i] > 2){
//          newdata = count[i];
//        }
    
// }
 
// console.log(newdata);


// class Node {

//     constructor(val){
//         this.data = val
//         this.next = null;
//     }
// }

// class typeNode extends Node  {
//   constructor(){
//     this.valtype;
//     this.pointer;
//   }

// }


// typeNode obj = new Node(10);


const count = {};

let arr = [1,2,1,4,4,1];
let ans = 0 ;

for(let i = 0 ; i < arr.length;i++){
     if(count[arr[i]] === undefined){
       count[arr[i]] = 1; 
    }else{
      count[arr[i]]++;
    }
   if(count[arr[i]] >= 2){
      ans = count[arr[i]];
   }

}

console.log(ans);


const count1 = {};
let arr1 = [1, 2, 1, 4, 4, 1];
let result = [];

for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i];
    count1[num] = (count1[num] || 0) + 1;
}

// Collect elements that appear more than 2 times
for (let key in count1) {
    if (count1[key] > 2) {
        result.push(Number(key)); // convert string key to number
    }
}

console.log(result); // Output: [1]
