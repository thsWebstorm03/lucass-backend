const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const promptController = require('../controllers/promptController');

router.get("/getlogs", passport.authenticate("jwt", {session : false}), promptController.getlogs);

router.get("/getlogbyId", passport.authenticate("jwt", {session : false}), promptController.getlogbyId);

router.post('/addlog', passport.authenticate("jwt", {session : false}), promptController.addlog);
router.post('/deletelog', passport.authenticate("jwt", {session : false}), promptController.deletelog);

router.post('/addSample', promptController.addSample);

module.exports = router;