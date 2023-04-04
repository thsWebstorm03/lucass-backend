const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lang = require("../models/langs");

const getlangs = (req, res) => {
   Lang
      .find()
      .then(langs => {
         if(!langs) return res.json([]);
         res.json({langs: langs})

      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const addlang = (req, res) => {
   
   const {data} = req.body;

   Lang
      .findOne({lang : data})
      .then(lang => {
         if(lang) return res.status(501).json({msg : "Already Exists"})
         const newLang = new Lang({lang : data})
         newLang
            .save()
            .then(result => {
               res.json({msg : "success"})
            })
            .catch(err => res.status(500).json({msg : err.message}))
      })
      .catch(err => res.status(500).json({msg : err.message}))

}

module.exports = {
   getlangs,
   addlang
}