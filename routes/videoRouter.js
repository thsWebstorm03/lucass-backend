const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/youVideo', videoController.getYouVideo);

router.post('/insCaption', videoController.getInsCaptions);

router.post('/hashtag', videoController.getHashtag);

module.exports = router;