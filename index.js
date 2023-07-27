require('dotenv').config();
const routes = require('./routes/auth');
const pahlawan = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use('/api/', pahlawan);
app.use('/api/auth', routes);

app.listen(process.env.PORT || 3002, console.log(`Server Started at ${process.env.PORT}!`))