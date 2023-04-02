const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Plan = require("../models/plans");

const getAll = (req, res) => {
   Plan
      .find({monthly : {$ne : 0}})
      .sort({monthly : 1})
      .then(result => {
         if(!result) return res.json([])
         res.json({plans : result})
      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const add = (req, res) => {
   const {title, monthly, yearly, type, wordlimit, imagelimit} = req.body

   Plan
      .findOne({title : title})
      .then(result => {
         if(result) return res.status(501).json({msg : "Already Exists"})
         const newPlan = new Plan({title, monthly, yearly, type, wordlimit, imagelimit})
         newPlan
            .save()
            .then(result => {
               res.json({msg : "success"})
            })
            .catch(err => res.status(500).json({msg : err.message}))
      })
      .catch(err => res.status(500).json({msg : err.message}))
}

module.exports = {
   getAll,
   add
}