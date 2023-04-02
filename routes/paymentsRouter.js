const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const paymentsController = require('../controllers/paymentsController');

router.get("/getlogs", passport.authenticate("jwt", {session : false}), paymentsController.getlogs);

router.post('/addlog', passport.authenticate("jwt", {session : false}), paymentsController.addlog);

router.post('/addpaymethod', passport.authenticate("jwt", {session : false}), paymentsController.addpaymethod);

router.post('/addcurrency', passport.authenticate("jwt", {session : false}), paymentsController.addcurrency);


module.exports = router;