const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let engineSchema = mongoose.Schema({
   title : {
      type : String,
      default : 'GPT-3.5 Turbo'
   },
   value : {
      type : String,
      default : "gpt-3.5-turbo"
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Engine = mongoose.model("engines", engineSchema);

module.exports = Engine;