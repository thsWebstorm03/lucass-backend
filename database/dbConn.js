// external imports
const mongoose = require("mongoose");
require('dotenv').config({ path: "../.env" });

module.exports = async() => {
  if (process.env.NODE_ENV == "production"){
    console.log("xxx:", process.env.MONGO_URI);
    const url = `mongodb+srv://${process.env.MONGO_PROD_USER}:${process.env.MONGO_PROD_PASSWD}@${process.env.MONGO_PROD_URL}/${process.env.MONGO_PROD_DATABASE}?authSource=admin`;
    mongoose
      .connect(url)
      .then(data => console.log(`Connected to MongoDB ${url}`))
      .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))
  } else {
    mongoose
      .connect(`${process.env.MONGO_URI}`)
      .then(data => console.log(`Connected to MongoDB ${process.env.MONGO_URI}`))
      .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))
  }
}