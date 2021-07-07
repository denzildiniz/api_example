
const express = require('express');
const app = express();
const tasks = require('./routes/task');

const connectDB = require('./db/connect');
require('dotenv').config()

const notFound = require('./middleware/not_found');


// port 
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes 
app.get("/" , (req,res) =>{
    res.send("helllllo")
    
})

app.use('/api/v1/task',tasks);

app.use(notFound);


const start = async () =>{
    try{
        await connectDB(process.env.CONNECTION_STRING)
        app.listen( port, () =>{
            console.log(`listening at ${port}...`);
        })

    } catch(error){
        console.log(error)
    }
}
start()

