const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); // Init express app
app.use(express.json()); // Set JSON communication
app.use(cors()); // Open API to public domain

mongoose.connect('mongodb://localhost:27017/nodeapivaccine', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}); // Connection with the DataBase

requireDir('./src/models');

app.use('/api', require("./src/routes"));

app.listen(3001);