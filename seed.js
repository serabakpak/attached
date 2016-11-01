// var mongoose = require('mongoose');
// var User = mongoose.model('User');
var db = require('./app_api/models');

userList = [
	{
		name: 'Charles Wang',
		email: 'charles3@gmail.com',
		gender: 'male',
		preferredGender: 'female',
		assessmentId: String,
		personalityBlend: 'Adventurous/Charismatic',
		personalityType1: 'Adventurous',
		personalityType2: 'Charismatic',
		compatiblePersonalities: String,
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
	{
		name: 'Johnny Wayne',
		email: 'johnny3@gmail.com',
		gender: 'male',
		preferredGender: 'female',
		assessmentId: String,
		personalityBlend: 'Adventurous/Charismatic',
		personalityType1: 'Adventurous',
		personalityType2: 'Charismatic',
		compatiblePersonalities: String,
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
		{
		name: 'Joe Doe',
		email: 'joe3@gmail.com',
		gender: 'male',
		preferredGender: 'female',
		assessmentId: String,
		personalityBlend: 'Adventurous/Reliable',
		personalityType1: 'Adventurous',
		personalityType2: 'Charismatic',
		compatiblePersonalities: String,
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
			{
		name: 'Jason Bourne',
		email: 'jason3@gmail.com',
		gender: 'male',
		preferredGender: 'female',
		assessmentId: String,
		personalityBlend: 'Charismatic/Reliable',
		personalityType1: 'Charismatic',
		personalityType2: 'Reliable',
		compatiblePersonalities: String,
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	}

]


db.User.create(userList, function(err, users){
    if (err) { return console.log('ERROR', err); }
    console.log("all users:", users);
    console.log("created", users.length, "users");
    process.exit();
});

