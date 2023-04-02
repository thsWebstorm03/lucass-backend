const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PayLog = require("../models/paylogs");
const Currency = require("../models/currencies");
const PayMethod = require("../models/paymethods");

const getlogs = (req, res) => {
   
   PayLog
      .find({userId : req.user.id})
      .then(logs => {
         if(!logs) res.json([]);
         res.json({logs: logs})

      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const addlog = (req, res) => {

   const {username,userId, currencyName, currencyId, paymethod, paymethodId, subscription,startAt, amount, status} = req.body;

   PayLog
      .insertMany({username,userId, currencyName, currencyId, paymethod, paymethodId, subscription,startAt, amount, status})
      .then(log => {
         if(!log) res.status(501).json({msg : "Database Error"})
         res.json({msg : "success"})
      })
      .catch(err => res.status(500).json({msg : err.message}))
      
}

const addpaymethod = (req, res) => {
   const {data} = req.body;

   PayMethod
      .findOne({method : data})
      .then(method => {
         if(method) return res.status(501).json({msg : "Already Exists"})
         const newMethod = new PayMethod({method : data})
         newMethod
            .save()
            .then(result => {
               res.json({msg : "success"})
            })
            .catch(err => res.status(500).json({msg : err.message}))
      })
      .catch(err => res.status(500).json({msg : err.message}))

}

const addcurrency = (req, res) => {

   const {title, code, symbol} = req.body;

   PayMethod
      .findOne({title : title})
      .then(currency => {
         if(currency) res.status(501).json({msg : "Dupulicated"})
         const newCurrency = new Currency({
            title : title,
            code : code,
            symbol : symbol
         });

         newCurrency
            .save()
            .then(result => {
               res.json({msg : "success"})
            })
            .catch(err => res.status(500).json({msg : err.message}))
      })
      .catch(err => res.status(500).json({msg : err.message}))

}

module.exports = {
   getlogs,
   addlog,
   addpaymethod,
   addcurrency
}