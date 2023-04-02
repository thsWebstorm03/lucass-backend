const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let questionSchema = mongoose.Schema({
   question : {
      type : String,
      default : "PayPal"
   },
   type : {
      type : String,
      enum : ["Multi Line", "Single Line"],
      default : "Multi Line"
   },
   required : {
      type : String,
      enum : ["Required", "Optional"],
      default : "Required"
   },
   maxlength : {
      type : Number,
      default : 30
   },

   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Question = mongoose.model("questions", questionSchema);

module.exports = Question;