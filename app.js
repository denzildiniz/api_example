
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');

const tasks = require('./routes/task');

const connectDB = require('./db/connect');
require('dotenv').config()

const notFound = require('./middleware/not_found');


// port 
const port = process.env.PORT || 3000;

// middleware
app.use(cors());

app.use(express.static(path.join(__dirname,"./public")));
app.set("view engine","hbs");
app.set("views", path.join(__dirname,"./template/views"));
hbs.registerPartials(path.join(__dirname,"./template/partials"))


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes 
app.get("/" , (req,res) =>{
    res.render("index")
    
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

