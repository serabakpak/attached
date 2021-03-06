var crypto = require('crypto'),
  jwt = require('jsonwebtoken'),
  mongoose = require( 'mongoose' );

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    default: 'Female'
  },
  preferredGender: {
    type: String,
    default: 'Male'
  },
  assessmentId: String,
  personalityBlend: {
    type: String,
    default: 'TBD'
  },
  personalityType1: {
    type: String,
    default: 'TBD'
  }, 
  personalityType2: {
    type: String,
    default: 'TBD'
  },
  compatiblePersonalities: [String],
  image: {
    type: String,
    default: 'http://ideaclicks.in/userimages/default_user.jpg'
  },
    bio: {
    type: String,
    default: 'I love long walks on the beach and candlelit dinners.'
  }, 
  hash: String,
  salt: String
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

var User = mongoose.model('User', userSchema);
module.exports = User;