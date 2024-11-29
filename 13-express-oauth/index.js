const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authRouter = require('./routes/auth')

require('dotenv').config()

const app = express()

const GOOGLE_CLIENT = process.env.GOOGLE_CLIENT
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

passport.use(
    new GoogleStrategy({
        clientID: GOOGLE_CLIENT,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(null, profile);
        // }); // mongodb
    }
));

app.use('/auth', authRouter)

app.listen(3000, () => {
    console.log(`server is running`)
})