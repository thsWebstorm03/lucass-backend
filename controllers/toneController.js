const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tone = require("../models/tones");

const getAll = (req, res) => {
   Tone
      .find()
      .then(tones => {
         if(!tones) res.json([]);
         res.json({tones: tones})

      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const add = (req, res) => {
   
   const {data} = req.body;

   Tone
      .findOne({tone : data})
      .then(tone => {
         if(tone) return res.status(501).json({msg : "Already Exists"})
         const newTone = new Tone({tone : data})
         newTone
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