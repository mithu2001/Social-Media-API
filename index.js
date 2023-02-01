const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('../Social-Media-Api/Routes/userRoute')
const authRoute = require('../Social-Media-Api/Routes/authRoute')


const app = express();
dotenv.config();

mongoose.connect(process.env.db_url,()=>{
  console.log("Database Connected");
});

//middleware
app.use(express.json()) //body-parser
app.use(helmet());
app.use(morgan("common"));

//Routers
app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);

app.listen(7000, ()=>{
    console.log("Server Created");
})