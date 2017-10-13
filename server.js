require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
const app = express();

// CONNECT TO MONGODB + CONNECTED/ERROR MESSAGES
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log(' [ ! ] DATABASE | CONNECTED TO MONGODB [ ! ] ');
});

connection.on('error', (err) => {
    console.log(' [ ERROR ] DATABASE | MONGODB ERROR [ ERROR ] ' + err);
});

// INJECT MIDDLEWARE
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

// Server PORT Settings
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(` [ ! ] SERVER | PORT ${PORT} IS HOT [ ! ] `);
})