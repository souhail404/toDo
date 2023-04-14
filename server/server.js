const express = require("express");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

//import routes 
const tasks = require("./routes/api/tasks");

const app= express()

// MIDDLEWARES
app.use(bodyParser.json());


const db = process.env.DB_URI;
const port = process.env.PORT;

// DATABASE CONNECTION
mongoose.connect(db)
    .then(()=> {
        app.listen(port, ()=>{
            console.log(`connected to database and listning to port ${port}`)
            app.use('/api/taks' , tasks);
        })
    })
    .catch((err)=>console.log(err));

//SET ROUTES
app.use('/api/tasks' , tasks);
