// function check(dev, dev2) {
//     this.dev = dev;
//     this.dev2 = dev2;

//     console.log(this.dev);   // frontend
//     console.log(this.dev2);  // backend
//     // console.log(this);       // the object
// }

// const newCheck = new check("frontend", "backend");
// // console.log(Check())


// <---- This in arrow Function ------>
// const myFun = () => {
//   console.log(this.dev);
// };

// myFun.call({ dev: "frontend" }); // ❌ `this` is NOT changed

// Arrow functions do not have their own this, and .call() / .apply() / .bind() cannot change it.

// Arrow functions capture this from their lexical scope when they are created — and .call() is ignored.


// <------This in arrow Funtion ------->;
 

// console.log(this === module.exports)

//  global.dev = "frontend";
//  global.dev2 = "backend";

// function check(){
//     console.log(this.dev);
// }

// check();
// console.log(this.dev);         // "frontend"
// console.log(global.dev);       // "frontend"
// console.log(this.dev === "frontend");         // true
// console.log(this.dev === global.dev);         // true
// console.log(this.dev === global.dev && global.dev === "frontend"); // ✅ true



function check(){
 return  dev = "frontend"
  dev2 = "backend";
}

const newCheck = check();

// newCheack.array.forEach(element => {
//   console.log(element)
// })

Object.entries(newCheck).forEach((data)=>{console.log(data)})

const newCheck2 = check();

let result = "";
Object.entries(newCheck2).forEach(([_, char]) => {  // ForEach give a sideEffect It mean it does not return a value 
  result += char;                                   // it does all other thing other hand return a value
});                                                 // like modifying the outside of a  variable value
console.log(result);  // Output: frontend
