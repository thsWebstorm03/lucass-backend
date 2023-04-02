const bcrypt = require('bcryptjs');
const User = require("../models/users");

const updateProfile = (req, res) => {
   const {name, email} = req.body;
   console.log(req.user, 'user')

   User
      .findOne({email : req.user.email})
      .then(user => {
         user.name = name;
         user.email = email;
         user
            .save()
            .then(user => res.json({msg : "success"}))
            .catch(err => res.status(500).json({msg : err.message}))
      })
      .catch(err => res.status(500).json({msg : err.message}))

}

const updatePassword = (req, res) => {
   
   const {newPass} = req.body;
   console.log(req.user, 'user')

   User
      .findOne({email : req.user.email})
      .then(user => {
         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newPass, salt, (err, hash) => {
               if (err) 
                  throw err;
               user.password = hash;
               user
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
            });
         });
      })
      .catch(err => res.status(500).json({msg : err.message}))

}

const deleteAccount = (req, res) => {
   
   const {newPass} = req.body;
   console.log(req.user, 'user')

   User
      .findOneAndRemove({email : req.user.email})
      .then(user => {
         if (!user) res.status(404).json({msg : 'User Not Found'});
         res.json({msg : "success"});
      })
      .catch(err => res.status(500).json({msg : err.message}))

}

module.exports = {
   updateProfile,
   updatePassword,
   deleteAccount
}