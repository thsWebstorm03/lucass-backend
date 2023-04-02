const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let categorySchema = mongoose.Schema({
   title : {
      type : String
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;