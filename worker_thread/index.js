const express = require("express")
const {Worker} = require("worker_threads")

const app = express();
const PORT = 5000;

app.get("/Blocking-non",(req,res)=>{
    res.status(200).send(`<h1>Hello Mohit Non-Blocking</h1>`)
})

app.get("/blocking",async (req,res)=>{
    const worker = new Worker("./worker.js");
    worker.on("message",(data)=>{
     res.status(200).send(data);
    })

    worker.on("error",(err)=>{
            res.send(err);
    })

    // res.status(200).send(`Blocking route ${counter}`)
})

app.listen(PORT ,()=>{
    console.log("server are runing ")
})