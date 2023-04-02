const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const questionController = require('../controllers/questionController');

router.get("/getall", questionController.getAll);

router.post('/add', questionController.add);


module.exports = router;