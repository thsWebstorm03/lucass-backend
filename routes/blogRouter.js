const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/ideas', blogController.getIdeas);

router.post('/intro', blogController.getIntro);

router.post('/keyword', blogController.getKeyword);

module.exports = router;