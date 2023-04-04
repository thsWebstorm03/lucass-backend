const express = require("express");
const mongoose = require('mongoose');
const http = require("http");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const urlencodeParser = bodyParser.urlencoded({ extended: false });
const passport = require('passport');
const router = require("./router");


require("dotenv").config({path : app.env});

const port = process.env.PORT || 5001;

app.use(bodyParser.json(), urlencodeParser);
// app.use(cors({
//     origin: 'https://coral-app-u2dte.ondigitalocean.app/',
//     credentials: true,
// }));
app.use(cors());

// const dbConn = require("./database/dbConn");
// dbConn();

// if (process.env.NODE_ENV == "production"){
//     console.log("xxx:", process.env.MONGO_URI);
//     const url = `mongodb+srv://${process.env.MONGO_PROD_USER}:${process.env.MONGO_PROD_PASSWD}@${process.env.MONGO_PROD_URL}/${process.env.MONGO_PROD_DATABASE}?authSource=admin`;
//     mongoose
//       .connect(url)
//       .then(data => console.log(`Connected to MongoDB ${url}`))
//       .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))
//   } else {
    console.log(process.env.MONGO_URI, 'mongo')
    mongoose
      .connect(`${process.env.MONGO_URI}`)
      .then(data => console.log(`Connected to MongoDB ${process.env.MONGO_URI}`))
      .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))
//   }

app.use((req, res, next) => { //doesn't send response just adjusts it
    res.header("Access-Control-Allow-Origin", "*") //* to give access to any origin
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
        return res.status(200).json({});
    }
    next(); //so that other routes can take ove
    
})

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use("/", router);

app.use((err, req, res, next) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600)
        res.status(err.status);
    else
        res.status(500);
    res.json({
        message: err.message,
        error: err
    });
});

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});