const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const toneController = require('../controllers/toneController');

router.get("/getall", toneController.getAll);

router.post('/add', toneController.add);

module.exports = router;