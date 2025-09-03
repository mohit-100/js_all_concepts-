const { promises } = require("dns");
const express = require("express")
const {Worker} = require("worker_threads")

const app = express();
const PORT = 8000;
const  THREAD_COUNT = 4;

app.get("/Blocking-non",(req,res)=>{
    res.status(200).send(`<h1>Hello Mohit Non-Blocking</h1>`)
})

function createWorker(){
     return new Promise((resolve , reject)=>{
         const worker = new Worker("./four-worker.js",{
             workerData :{
                thread_count:THREAD_COUNT

             },
        })
           worker.on("message",(data)=>{
            resolve(data);
    //  res.status(200).send(data);
    }),

    worker.on("error",(err)=>{
           reject(err)
    })
     })
}
app.get("/blocking",async (req,res)=>{
   const workerPromise = [];

   for(let i = 0 ; i < THREAD_COUNT; i++){
       workerPromise.push(createWorker());
   }
    const Threadresult = await Promise.all(workerPromise);

    const total = Threadresult[0]+Threadresult[1]+Threadresult[2]+Threadresult[3];


     res.status(200).send(`Blocking route ${total}`)
})

app.listen(PORT ,()=>{
    console.log("server are runing ")
})

// | Weakness                    | Why It Happens                              | Fix                                                   |
// | --------------------------- | ------------------------------------------- | ----------------------------------------------------- |
// | **CPU-heavy logic**         | Blocks the main thread                      | Use **Worker Threads** or **offload to services**     |
// | **Large JSON parsing**      | `JSON.parse()` is synchronous               | Use **streaming**, **payload limits**, or **workers** |
// | **Blocking libraries**      | Some native modules block thread            | Use **async-safe alternatives**                       |
// | **Long-running operations** | Starve event loop if run inside main thread | Split tasks, use queues, or background workers        |
