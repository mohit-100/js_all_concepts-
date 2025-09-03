const http = require("http")


const PORT = 5000;

const server = http.createServer(()=>{

});

server.listen(PORT ,(req,res)=>{
    console.log("server is runing")
})