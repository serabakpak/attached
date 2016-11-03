
var db = require('../../app_api/models');



module.exports.findMatches = function (req, res) {
	db.User
	  .findById(req.user._id)
	  .exec(function(err, user) {
	    console.log('user from matches.js', user);

	    var personalityType1Query = [];
	    var personalityType2Query = [];

	    user.compatiblePersonalities.forEach(function(personality) {
	    	personalityType1Query.push({ personalityType1: personality });
	    	personalityType2Query.push({ personalityType2: personality });
	    })

	    var query = db.User.find({});
	    query.where('gender', user.preferredGender);
			query.or(personalityType1Query);
			query.or(personalityType2Query);
			query.nor([{ _id: user._id }]);
			query.limit(3);
			query.exec(function (err, matches) {
				  console.log('matches', matches);
				  res.status(200).json(matches);
			});
	  });



	

}