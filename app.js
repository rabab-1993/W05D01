
const express = require("express");
const app = express();

// Middleware

app.use(express.json())



// Data 
let tasks= [
{id:1 , taskName:"sleep" , isCompleted:false},
{id:2 , taskName:"eat" , isCompleted:false},
{id:3 , taskName:"drink" , isCompleted:false},
{id:4 , taskName:"reading" , isCompleted:false}, 

]; 

app.get("/lists", (req, res) => {
    res.status(200)
    res.json(tasks)
})

app.post("/list", (req, res) => {
    let {id , taskName , isCompleted}= req.body;
    tasks.push({id , taskName , isCompleted})
    res.status(200)
    res.json({id , taskName , isCompleted})
})

app.put("/updated", (req, res) => {
    let {isCompleted}= req.body
    tasks.forEach((ele) => {
      ele.isCompleted = isCompleted;
    })
    res.status(200)
    res.json(tasks)
})

app.delete("/deleted", (req, res) => {
    let {id , taskName , isCompleted}= req.body;
    tasks.splice(0,1)
    res.status(200)
    res.json({id , taskName , isCompleted})

})


// Setup Server
let port = 5500;
app.listen(port, (req,res) => {
   console.log(`listening on port ${port}!`);
})