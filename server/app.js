
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
require('./db/conn')
const users = require('./models/userSchema')
const cors = require('cors');
const router =  require('./routes/router')
// const DB = 'mongodb+srv://mohit:mohit@123@cluster0.lkrn79d.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0'
const port = 8003;
app.use(cors());
app.use(express.json())
app.use(router);


app.listen(port,()=>{
    console.log(`server is up at port number ${port}`)
})