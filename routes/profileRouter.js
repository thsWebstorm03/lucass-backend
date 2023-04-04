const express = require('express');
const passport = require('passport');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/updateProfile', passport.authenticate('jwt',{session : false}), profileController.updateProfile);

router.post('/updatePassword', passport.authenticate('jwt',{session : false}), profileController.updatePassword);

router.post('/deleteAccount', passport.authenticate('jwt',{session : false}), profileController.deleteAccount);

module.exports = router;