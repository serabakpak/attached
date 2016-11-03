var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var request = require('request');
var assessmentId;

module.exports.register = function(req, res) {
  console.log("Registering user: " + req.body.email);
  var user = '35481e9692f1ccf188b2348491';
  var pass = 'x';

  var options = {
      url: 'https://api.traitify.com/v1/assessments',
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + user + ':' + pass,
        'Content-Type': 'application/json'     
      },
      json: { 
        'deck_id': 'core' 
      }
  };

  function callback(error, response, body) {
      if (error) {
          console.log('There has been an error getting the assessment ID', error);
      }
      if (!error) {
          console.log(body);
          var user = new User();         
          user.assessmentId = body.id;
          console.log('assessmentId is ', user.assessmentId);
          user.name = req.body.name;
          user.email = req.body.email;
          user.gender = req.body.gender;
          user.preferredGender = req.body.preferredGender;
          
          
          user.setPassword(req.body.password);

          user.save(function(err) {
            var token;
            token = user.generateJwt();
            
            res.status(200);
            res.json({
              "token" : token
            });
          });
      }
      console.log(response.statusCode);
  }

  request(options, callback);
};

module.exports.login = function(req, res) {

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};

