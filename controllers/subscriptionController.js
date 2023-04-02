const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Subscription = require("../models/subscriptions");

const add = (req, res) => {
   const {user, plan, startAt, endAt, canceledAt, status, frequency} = req.body;

   Subscription
      .insertMany({user, plan, startAt, endAt, canceledAt, status, frequency})
      .then(log => {
         if(!log) res.status(501).json({msg : "Database Error"})
         res.json({msg : "success"})
      })
      .catch(err => res.status(500).json({msg : err.message}))
}

module.exports = {
   add
}