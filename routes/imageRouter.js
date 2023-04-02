const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/oilPaint', imageController.generateOilPaint);

router.post('/waterColor', imageController.generateWaterColor);

router.post('/sketch', imageController.generateSketch);

router.post('/pop', imageController.generatePop);

module.exports = router;