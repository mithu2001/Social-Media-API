const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();


app.listen(7000, ()=>{
    console.log("Server Created");
})