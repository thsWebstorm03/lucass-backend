const express = require('express');
const router = express.Router();
const digitalController = require('../controllers/digitalController');

router.post('/variants', digitalController.getVariants);

router.post('/general', digitalController.getGeneral);

module.exports = router;