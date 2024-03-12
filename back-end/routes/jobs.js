const express = require('express');
const auth = require('../middleware/auth');
const jobsCtrl = require('../controllers/jobs');
const router = express.Router();

router.post('/', auth, jobsCtrl.createThing);
router.get('/:id', auth, jobsCtrl.getOneThing);
router.get('/', auth, jobsCtrl.getAllThings);
router.put('/:id', auth, jobsCtrl.modifyThing);
router.delete('/:id', auth, jobsCtrl.deleteThing);

module.exports = router;