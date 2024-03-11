const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Elias:W4dJeX8jI4xQWeom@sourcejob.fd2djbg.mongodb.net/?retryWrites=true&w=majority&appName=SourceJob',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connexion sucess !'))
  .catch(() => console.log('MongoDB connexion failed'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.post('/api/jobs', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'job ajouté !'
    })
    next();
});

module.exports = app;

