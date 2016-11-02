var mongoose = require('mongoose');
var User = mongoose.model('User');
var _ = require('lodash');

module.exports.profileRead = function(req, res) {

  if (!req.user._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.user._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};

module.exports.profileEdit = function(req, res) {
  console.log('the request params for compatibilities personalities is : ', req.body.compatiblePersonalities );
  var uniqueCompPers = _.uniq(req.body.compatiblePersonalities);
  User
    .findById(req.user._id)
    .exec(function(err, user) {
      if(err) {
        console.log('profileEdit error in profile.js (api controller)', err); 
      }
      user.personalityBlend = req.body.personalityBlend;
      user.personalityType1 = req.body.personalityType1;
      user.personalityType2 = req.body.personalityType2;
      user.compatiblePersonalities = uniqueCompPers;
      user.save(function(err, savedUser) {
        if(err) {
          console.log('saving updated user failed');
        }
        res.json(savedUser);
      });
  });
}
