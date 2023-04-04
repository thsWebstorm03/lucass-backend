const express = require('express');
const router = express.Router();
const brainController = require('../controllers/brainController');

router.post('/genName', blogController.generateNames);

router.post('/genIdeas', blogController.generateIdeas);

module.exports = router;