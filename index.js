const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./Routes/userRoute')
const authRoute = require('./Routes/authRoute')
const postRoute = require('./Routes/postRoute');


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
app.get('/',(req,res)=>{
  res.send("Rest API https://socialmediaapi-tui7.onrender.com/api ,  /users, /users/id ,/posts ");
});

app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/posts',postRoute);


const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("Server Created");
})