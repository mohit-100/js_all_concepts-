// | Expression           | Result  | Why?                       |
// | -------------------- | ------- | -------------------------- |
// | `[] == false`        | `true`  | `[] → "" → 0`, `false → 0` |
// | `"" == 0`            | `true`  | Both become `0`            |
// | `false == "false"`   | `false` | `"false"` is not `0`       |
// | `null == 0`          | `false` | Only equal to `undefined`  |
// | `null === undefined` | `false` | Different types            |
// | `null == undefined`  | `true`  | Special case               |
// | `[1] == 1`           | `true`  | `[1] → "1" → 1`            |
// | `true == "1"`        | `true`  | `"1" → 1`, `true → 1`      |

// | Value        | To Number | To String           |
// | ------------ | --------- | ------------------- |
// | `undefined`  | `NaN`     | `"undefined"`       |
// | `null`       | `0`       | `"null"`            |
// | `true`       | `1`       | `"true"`            |
// | `false`      | `0`       | `"false"`           |
// | `[]`         | `0`       | `""`                |
// | `{}`         | `NaN`     | `"[object Object]"` |
// | `""` (empty) | `0`       | `""`                |

console.log([] == ""); // if we used == it convert the [] into "" so [] == "" become True; 
              // but if we do === then it does not do type convert it a array object [] so false;

console.log(true == 1); //True beacuse convert in TRUE to 1 if we do === than False 

console.log("[]" == [])

console.log(null == undefined) // special ; This is the only case where null is equal to anything other than itself.

console.log(null == null)

console.log(NaN === NaN) // NaN is not equal to anything, including itself.

console.log(1+undefined == NaN) //false why because NaN is alway false it convert 1+undefined to NaN because of '+' operater;

console.log([] == '') // true on [] == '' or [] == 0


//<----------######---------->
// On operaters + 
// | Expression        | Type Coercion            | Result               | Explanation                                                              |
// | ----------------- | ------------------------ | -------------------- | ------------------------------------------------------------------------ |
// | `1 + undefined`   | `1 + NaN`                | `NaN`                | `undefined` becomes `NaN`                                                |
// | `"1" + undefined` | `"1" + "undefined"`      | `"1undefined"`       | String concatenation                                                     |
// | `1 + null`        | `1 + 0`                  | `1`                  | `null` becomes `0`                                                       |
// | `"1" + null`      | `"1" + "null"`           | `"1null"`            | String concatenation                                                     |
// | `1 + NaN`         | `1 + NaN`                | `NaN`                | NaN always infects                                                       |
// | `"1" + NaN`       | `"1" + "NaN"`            | `"1NaN"`             | String concatenation                                                     |
// | `1 + true`        | `1 + 1`                  | `2`                  | `true` becomes `1`                                                       |
// | `1 + false`       | `1 + 0`                  | `1`                  | `false` becomes `0`                                                      |
// | `"1" + true`      | `"1" + "true"`           | `"1true"`            | String concatenation                                                     |
// | `1 + ""`          | `1 + ""` (string)        | `"1"`                | Number + string = string                                                 |
// | `[] + 1`          | `"" + 1`                 | `"1"`                | `[]` becomes `""`                                                        |
// | `1 + []`          | `1 + ""`                 | `"1"`                | `[]` becomes `""`                                                        |
// | `[] + []`         | `"" + ""`                | `""`                 | Empty string result                                                      |
// | `[] + {}`         | `"" + "[object Object]"` | `"[object Object]"`  | Array becomes `""`, Object becomes string                                |
// | `{} + []`         | `"[object Object]"`      | `"[object Object]"`  | Depends on context; may behave differently outside parentheses           |
// | `1 + {}`          | `1 + "[object Object]"`  | `"1[object Object]"` | Object coerced to string                                                 |
// | `{}` + `1`        | block + 1 = `1`          | `1`                  | `{}` is an empty block in some cases; use `({}) + 1` for object addition |


console.log(1 + undefined == NaN); // 👉 false

console.log(true == "true")  // | Value    | `To Number` | `To String` |
                             // | -------- | ----------- | ----------- |
                             // | `true`   | `1`         | `"true"`    |
                             // | `"true"` | `NaN`       | `"true"`    |
