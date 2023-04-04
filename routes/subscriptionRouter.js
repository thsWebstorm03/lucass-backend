const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const subscriptionController = require('../controllers/subscriptionController');

// router.get("/getall", subscriptionController.getAll);

router.post('/add', subscriptionController.add);

module.exports = router;