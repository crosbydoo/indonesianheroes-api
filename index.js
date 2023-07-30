require('dotenv').config();
const routes = require('./routes/auth');
const pahlawan = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const swaggerUi = require('swagger-ui-express');
const swaggerSumDocument = require ('./swaggerUI.json');

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

// app.get('/', (req, res) => {
//     res.send('Ini adalah halaman utama dengan daftar metode yang diizinkan.');
// });

app.use(express.json());
app.use('/api/heroes', pahlawan)
app.use('/api/auth', routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSumDocument));

app.listen(process.env.PORT || 3002, console.log(`Server Started at ${process.env.PORT}!`))