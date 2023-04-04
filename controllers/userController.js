const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');

const User = require("../models/users");

const doLogin = (req, res) => {
   console.log(req.body, 'body')
   const errors = {};
   const email = req.body.email;
   const password = req.body.password;

   User
      .findOne({email})
      .then(user => {
         if (!user) {
            errors.email = 'User not found';
            return res
               .status(404)
               .json(errors);
         }

         bcrypt
            .compare(password, user.password)
            .then(isMatch => {
               if (isMatch) {
                  const payload = {
                     id: user._id,
                     name: user.name,
                     avatar: user.avatar,
                     role: user.role
                  };

                  jwt.sign(payload, keys.secretOrKey, {
                     expiresIn: 3600
                  }, (err, token) => {
                     return res.json({
                        success: true,
                        token: 'Bearer ' + token,
                        user
                     });
                  });
               } else {
                  errors.password = 'Password incorrect';
                  return res
                     .status(400)
                     .json(errors);
               }
            });
      })
      .catch(err => res.status(500).json({msg: err.message}));
};

const doRegister = (req, res) => {
   try {
      const errors = {}
      console.log(req.body, 'req')
      User
         .findOne({email: req.body.email})
         .then(user => {
            if (user) {
               errors.email = 'Email already exists';
               return res
                  .status(400)
                  .json(errors)
            } else {
               const avatar = gravatar.url(req.body.email, {
                  s: '200', // Size
                  r: 'pg', // Rating
                  d: 'mm' // Default
               });

               const newUser = new User({username: req.body.username, email: req.body.email, avatar, password: req.body.password});

               bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                     if (err) 
                        throw err;
                     newUser.password = hash;
                     newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                  });
               });
            }
         });
   } catch (err) {
      return res
         .status(400)
         .json(err)
   }
};

const getCurrent = (req, res) => {
   if(!req.user) return res.status(401).json({msg : "Unauthorized"});
   res.json({id: req.user._id, username: req.user.username, email: req.user.email, role: req.user.role, password: req.user.password});
}

const profile = (req, res) => {
   res.json({message: 'You made it to the secured profile', user: req.user, token: req.query.secret_token})
}

const setLang = (req, res) => {
   const {lang} = req.body;
   
   User
      .findById(req.user.id)
      .then(user => {
         user.lang = lang;
         user
            .save()
            .then(lang => res.json({msg : "success"}))
            .catch(err => res.status(500).json({msg : err.message}))
      })
      .catch(err => res.status(500).json({msg : err.message}))
}

module.exports = {
   doLogin,
   doRegister,
   getCurrent,
   profile,
   setLang
}