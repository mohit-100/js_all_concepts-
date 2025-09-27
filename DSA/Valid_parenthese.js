//  function checkValidParenthese(s){
     
//      while(s.includes("()") || s.includes("[]") || s.includes("{}")){
         
//          if(s.includes("()") )
//          {
//              s=  s.replace("()","");
              
//          }
//           if(s.includes("[]") )
//          {
//              s=  s.replace("[]","");
              
//          }
//           if(s.includes("{}") )
//          {
//             s =   s.replace("{}","");
              
//          }
         
//      }
//       return s.length === 0 ;
//  }

function UsingStack(s) {
    let stack = [];

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;

            let ch = stack.pop();
            if (
                (ch === '(' && char === ')') ||
                (ch === '[' && char === ']') ||
                (ch === '{' && char === '}')
            ) {
                continue;
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases
let s1 = "[]{}()";
console.log(UsingStack(s1));  // true

let s2 = "[]{}()}";
console.log(UsingStack(s2));  // false

let s3 = "{[()]}";
console.log(UsingStack(s3));  // true
