const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Thing = require('./models/Thing');

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
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  console.log(req.body);
  thing.save()
    .then(() => res.status(201).json({ message: 'Job added successfully!' }))
    .catch(error => {
      console.error('Error saving data:', error);
      res.status(400).json({ error: error.message });
    });
});

app.get('/api/jobs/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(things => res.status(200).json(things))
    .catch(error => res.status(404).json({ error }));
});

app.get('/api/jobs', (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
});

app.put('/api/jobs/:id', (req, res, next) => {
  Thing.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Job modifié !' }))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/jobs/:id', (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Job supprimé !'}))
    .catch(error => res.status(404).json({ error }));
})

module.exports = app;

