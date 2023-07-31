require('dotenv').config();
const routes = require('./routes/auth');
const pahlawan = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swaggerdocs.json'); 

mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
const swaggerDocs = swaggerDefinition;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.json());
app.use('/api/heroes', pahlawan)
app.use('/api/auth', routes);
app.use((req, res, next) => {
    if (req.originalUrl === '/') {
      res.set('Location', '/api-docs');
      return res.status(302).send();
    }
    next();
  });
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {deepLinking: true }));

app.listen(process.env.PORT || 3002, console.log(`Server Started at ${process.env.PORT}!`))


