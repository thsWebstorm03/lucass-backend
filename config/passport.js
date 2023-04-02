const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const keys = require("./keys");
const mongoose = require ("mongoose")
const UserModel = mongoose.model("users");

module.exports = passport => {
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: keys.secretOrKey
    },
        async (jwtPayload, cb) => {
            //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
            return UserModel.findById(jwtPayload.id)
                .then(user => {
                    return cb(null, user);
                })
                .catch(err => {
                    return cb(err);
                });
        }
    ))
};