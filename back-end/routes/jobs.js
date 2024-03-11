const express = require('express');
const router = express.Router();
const jobsCtrl = require('../controllers/jobs');

router.post('/', jobsCtrl.createThing);

router.get('/:id', jobsCtrl.getOneThing);

router.get('/', jobsCtrl.getAllThings);

router.put('/:id', jobsCtrl.modifyThing);

router.delete('/:id', jobsCtrl.deleteThing);

module.exports = router;