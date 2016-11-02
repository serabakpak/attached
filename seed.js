var db = require('./app_api/models');

userList = [
	{
		name: 'Jon Snow',
		email: 'jon@jon.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Adventurous/Charismatic',
		personalityType1: 'Adventurous',
		personalityType2: 'Charismatic',
		compatiblePersonalities: ['Adventurous', 'Charismatic'],
		image: 'http://i.imgur.com/xrDIDWj.jpg?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
	{
		name: 'Glenn Rhee',
		email: 'glenn@glenn.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Social/Mellow',
		personalityType1: 'Social',
		personalityType2: 'Mellow',
		compatiblePersonalities: ['Social', 'Mellow', 'Thoughtful'],
		image: 'http://i.imgur.com/nOcR5zQ.jpg?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
		{
		name: 'Finn',
		email: 'finn@finn.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Charismatic/Rational',
		personalityType1: 'Charismatic',
		personalityType2: 'Rational',
		compatiblePersonalities: ['Thoughtful', 'Rational', 'Reasonable'],
		image: 'http://i.imgur.com/0msTWz9.png?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
	{
		name: 'Jason Bourne',
		email: 'jason@jason.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Social/Reliable',
		personalityType1: 'Social',
		personalityType2: 'Reliable',
		compatiblePersonalities: 'Social/Thoughtful',
		image: 'http://i.imgur.com/mojbkLg.jpg?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
	{
		name: 'Daryl Dixon',
		email: 'daryl@daryl.com',
		gender: 'Female',
		preferredGender: 'Male',
		assessmentId: String,
		personalityBlend: 'Charismatic/Mellow',
		personalityType1: 'Charismatic',
		personalityType2: 'Mellow',
		compatiblePersonalities: ['Social', 'Mellow'],
		image: 'http://i.imgur.com/oKpWrJO.png?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	}

]

db.User.remove({}, function (){
	db.User.create(userList, function(err, users){
	    if (err) { return console.log('ERROR', err); }
	    console.log("all users:", users);
	    console.log("created", users.length, "users");
	    process.exit();
	});
})


