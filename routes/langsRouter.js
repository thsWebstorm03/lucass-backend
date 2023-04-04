const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const langsController = require('../controllers/langsController');

router.get("/getlangs", langsController.getlangs);

router.post('/addlang', langsController.addlang);

module.exports = router;