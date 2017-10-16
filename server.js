require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const UsersController = require('./controllers/UsersController')

// OVERWRITE MONGOOSE'S PROMISE LIBRARY + CREAT EXPRESS APP
mongoose.Promise = global.Promise;
const app = express();

// CONNECT TO MONGODB + CONNECTED/ERROR MESSAGES
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log(' [ ! ] DATABASE | CONNECTED TO MONGODB [ ! ] ');
});

connection.on('error', (err) => {
    console.log(' [ ERROR ] DATABASE | MONGODB ERROR [ ERROR ] ' + err);
});

// INJECT MIDDLEWARE
app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json());

// CONTROLLERS
app.use('/api/users', UsersController)

// INDEX ROUTE RENDERS OUR REACT APP
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

// Server PORT Settings
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(` [ ! ] SERVER | PORT ${PORT} IS HOT [ ! ] `);
})