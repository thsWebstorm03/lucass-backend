const express = require('express');
const router = express.Router();
const ecomController = require('../controllers/ecomController');

router.post('/product', ecomController.getProduct);

router.post('/shortText', ecomController.getShortText);

module.exports = router;