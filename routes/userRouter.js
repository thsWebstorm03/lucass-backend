const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const userController = require('../controllers/userController');

router.post("/register", userController.doRegister);

router.post('/login', userController.doLogin);

router.get("/current",passport.authenticate("jwt", { session: false }), userController.getCurrent);

router.post('/setlang', passport.authenticate("jwt", { session: false }), userController.setLang);

module.exports = router;