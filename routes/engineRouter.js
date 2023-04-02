const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const engineController = require('../controllers/engineController');

router.get("/getall", engineController.getAll);

router.post('/add', engineController.add);

module.exports = router;