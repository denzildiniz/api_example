const express = require('express');
const app = express();
const tasks = require('./routes/task');


// port 
const port = process.env.port || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes 
app.get("/hello" , (req,res) =>{
    res.send("helllllo")
    
})

app.use('/api/v1/task',tasks);
// app.use('/api/v1/task/id',tasks)


app.listen( port, () =>{
    console.log(`listening at ${port}...`);
})