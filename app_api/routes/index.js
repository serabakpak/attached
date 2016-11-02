var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlMatches = require('../controllers/matches');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// update profile after assessment
router.patch('/profile', auth, ctrlProfile.profileEdit);

// get matches
router.get('/matches', auth, ctrlMatches.findMatches);



	
module.exports = router;