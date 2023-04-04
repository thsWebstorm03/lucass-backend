const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const planController = require('../controllers/planController');

router.get("/getall", planController.getAll);

router.post('/add', planController.add);

module.exports = router;