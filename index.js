require('dotenv').config();
const routes = require('./routes/auth');
const pahlawan = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
const showAllowedMethods = (req, res, next) => {
    res.setHeader('Allow', 'GET');
    next();
  };

app.get('/', (req, res) => {
    res.send('Ini adalah halaman utama dengan daftar metode yang diizinkan.');
});

app.use(express.json());
app.use('/', showAllowedMethods);
app.use('/api/heroes', pahlawan)
app.use('/api/auth', routes);

app.listen(process.env.PORT || 3002, console.log(`Server Started at ${process.env.PORT}!`))