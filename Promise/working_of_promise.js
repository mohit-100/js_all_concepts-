const { error } = require("console");

function CatchAync(fun){
 Promise.resolve(fun).catch(error);
}


CatchAync(async function func(){
    return 1;
})

