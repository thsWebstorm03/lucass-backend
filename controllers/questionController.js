const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = require("../models/questions");

const getAll = (req, res) => {
   Question
      .find({isDeleted : false})
      .then(result => {
         if(!result) res.json([]);
         res.json({questions: result})

      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const add = (req, res) => {
   const {question, type, required, maxlength} = req.body;
   Question
      .findOne({question : question})
      .then(result => {
         if(result) return res.status(501).json({msg : "Already Exists"})
         const newQuestion = new Question({
            question : question,
            type : type,
            required : required,
            maxlength : maxlength
         });

         newQuestion
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