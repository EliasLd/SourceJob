const express = require('express');
const auth = require('../middleware/auth');
 
const router = express.Router();

const jobsCtrl = require('../controllers/jobs');

router.post('/', auth, jobsCtrl.createThing);
router.get('/:id', auth, jobsCtrl.getOneThing);
router.get('/', auth, jobsCtrl.getAllThings);
router.put('/:id', auth, jobsCtrl.modifyThing);
router.delete('/:id', auth, jobsCtrl.deleteThing);

module.exports = router;