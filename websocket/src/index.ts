import { WebSocketServer } from "ws";

const ws = new WebSocketServer({port:8080});

ws.on("connection",function(socket){
    console.log(socket)
setInterval(()=>{
socket.send("yes")
},1000)
   
})