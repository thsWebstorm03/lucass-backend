const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrommptLog = require("../models/promptlogs");
const Prompt = require("../models/prompts");

const getlogs = (req, res) => {

   console.log(req.user, 'user')
   PrommptLog
      .find({user : req.user.id})
      .then(logs => {
         if(!logs) res.json([]);
         res.json({logs: logs})

      })
      .catch(err => res.status(500).json({msg : err.message}))

}

const getlogbyId = (req, res) => {

   console.log(req.query.pId)
   const {pId} = req.query;

   PrommptLog
      .findOne({user : req.user.id, _id:pId})
      .then(logs => {
         if(!logs) res.json([]);
         res.json({logs: logs})

      })
      .catch(err => res.status(500).json({msg : err.message}))

}

const addlog = (req, res) => {
   
   const {title, pathname, prompt, questionlist, answerlist, tone, content} = req.body;

   PrommptLog
      .insertMany({user : req.user.id, title, pathname, prompt, questionlist, answerlist, tone, content})
      .then(log => {
         if(!log) return res.status(501).json({msg : "Database Error"})
         res.json({msg : "success"})
      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const addSample = (req, res) => {

   const {type, title, maxtokens, category, questions} = req.body;
   console.log(questions,"questions")
   Prompt
      .insertMany({
         type : type,
         title : title,
         maxtokens : maxtokens,
         category : category,
         questionlist : questions
      })
      .then(result => {
         if(!result) return res.status(501).json({msg : "Database Error"})
         res.json({msg : "success"})
      })
      .catch(err => res.status(500).json({msg : err.message}))

}

const deletelog = (req, res) => {
   
   const {id} = req.body;
   console.log(id, 'id')
   const condition = id == -1 ? {user : req.user.id} : {user : req.user.id, _id : id} ;

   PrommptLog
      .updateMany(condition, {isDeleted : true})
      .then(result => {
         res.json({msg : "success"})
      })
      .catch(err => res.status(500).json({msg : err.message}))
}

module.exports = {
   getlogs,
   getlogbyId,
   addlog,
   addSample,
   deletelog
}