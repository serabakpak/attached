
var db = require('../../app_api/models');



module.exports.findMatches = function (req, res) {

	var query = db.User.find({});
	query.where('personalityType1', 'Adventurous');
	query.limit(5);
	query.exec(function (err, matches) {
		  console.log('matches', matches);
		  res.status(200).json(matches);
	});

}

