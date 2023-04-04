const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const categoryController = require('../controllers/categoryController');

router.get("/getall", categoryController.getAll);

router.post('/add', categoryController.add);


module.exports = router;