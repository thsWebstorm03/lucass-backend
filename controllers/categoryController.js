const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = require("../models/categories");

const getAll = (req, res) => {
   Category
      .find({isDeleted : false})
      .then(result => {
         if(!result) res.json([]);
         res.json({categories: result})

      })
      .catch(err => res.status(500).json({msg : err.message}))
}

const add = (req, res) => {
   const {data} = req.body;
   Category
      .findOne({title : data})
      .then(category => {
         if(category) return res.status(501).json({msg : "Already Exists"})
         const newCategory = new Category({title : data})
         newCategory
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