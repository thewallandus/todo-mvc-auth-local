const LocalStrategy = require('passport-local').Strategy
// ^ we're calling the LocalSTrategy => this is the syntax
const mongoose = require('mongoose')
// we're calling mongoose
const User = require('../models/User')
// we're going into the models and calling the user model
// this is the entire schema

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { msg: `Email ${email} not found.` })
      }
      if (!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, { msg: 'Invalid email or password.' })
      })
    })
  }))
  // first line sets up the local strategy
  // we're finding the email
  // if password isn't there then do something
  // check if password matches
  

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  // turn the user into a id => guess

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
  // turn the user by his id and turn him into real user
}
