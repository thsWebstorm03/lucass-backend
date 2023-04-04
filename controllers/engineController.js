const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Engine = require("../models/engines");

const getAll = (req, res) => {
   Engine
      .find()
      .then(engines => {
         if(!engines) return res.json([]);
         res.json({engines: engines})

      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const add = (req, res) => {
   
   const {title, value} = req.body;

   Engine
      .findOne({title : title})
      .then(result => {
         if(result) return res.status(501).json({msg : "Already Exists"})
         const newEngine = new Engine({title : title, value: value})
         newEngine
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