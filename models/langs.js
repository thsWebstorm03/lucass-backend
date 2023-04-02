const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let langSchema = mongoose.Schema({
   lang : {
      type : String,
      default : "English"
   },
   isDeleted : {
      type : Boolean,
      default : false
   }
}, {timestamps: true});

const Lang = mongoose.model("langs", langSchema);

module.exports = Lang;