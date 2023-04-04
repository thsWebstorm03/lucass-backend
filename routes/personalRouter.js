const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');

router.post('/loveLetter', personalController.makeLoveLetter);

router.post('/coverLetter', personalController.makeCoverLetter);

module.exports = router;