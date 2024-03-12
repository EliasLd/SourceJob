const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const jobsRoutes = require('./routes/jobs');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect(`mongodb+srv://Elias:${process.env.MONGODB_PASSWORD}@sourcejob.fd2djbg.mongodb.net/?retryWrites=true&w=majority&appName=SourceJob`,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connection sucess !'))
  .catch(() => console.log('MongoDB connection failed !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api/jobs', jobsRoutes);


module.exports = app;

