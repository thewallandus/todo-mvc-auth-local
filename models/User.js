const bcrypt = require('bcrypt')
// ^ this encrypts the password
const mongoose = require('mongoose')
// this sets up mongoose

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String
})
// this is the actual userSchema of the user
// it has a username that is unique
// this has an email that is unique
// this has a password which was a string

// Password hash middleware.
// this encrypts the password
 
 UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

// Helper method for validating user's password.
// this compares the password to make sure that the password is correct

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}


module.exports = mongoose.model('User', UserSchema)
// ^ this exports the userScheme as the user
