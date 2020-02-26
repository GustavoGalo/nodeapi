const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); // Init express app
app.use(express.json()); // Set JSON communication
app.use(cors()); // Open API to public domain

mongoose.connect('mongodb+srv://deploy:7432017551@api-tjyy1.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}); // Connection with the DataBase

requireDir('./src/models');

app.use('/api', require("./src/routes"));

app.listen(3001);