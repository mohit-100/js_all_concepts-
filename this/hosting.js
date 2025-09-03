// console.log(dev);             
// var dev = "mohit" // undefinded var is initialized with undefined at hoisting time.

// console.log(dev1);
// let dev1 = "mohit" //reference error it goes in TDZ same for Const also;

// console.log(dev2);

// dev2 = "mohit" //reference error but not goes in TDZ;

let dev;
console.log(dev); //undefined  All varaible are By-default initialized with undefinded if it let,cosnt ,var
// but in hosting Time let,const are goes in TDZ and it give a reference error 
//only Var type variable are initialized with undefined on hosting Time;