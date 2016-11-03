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
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Charismatic/Mellow',
		personalityType1: 'Charismatic',
		personalityType2: 'Mellow',
		compatiblePersonalities: ['Social', 'Mellow'],
		image: 'http://i.imgur.com/oKpWrJO.png?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
		{
		name: 'Daenarys Targaryen',
		email: 'daenarys@daenarys.com',
		gender: 'Female',
		preferredGender: 'Male',
		assessmentId: '029bf4ee-014e-4cc5-a6d2-856e222700ef',
		personalityBlend: 'Social/Thoughtful',
		personalityType1: 'Social',
		personalityType2: 'Thoughtful',
		compatiblePersonalities: ['Social', 'Mellow'],
		image: 'http://i.imgur.com/7i2c6ue.jpg?1',
		hash: '4d8c5c7fde6d7bb8aaec0eabdc43631638440d563014097844e7eac989ba90649f0268ec6583223e8492b74c53f45278555a42e5e34683895000d4b2a6d9792c',
		salt: 'd5c86019bc045d28b81627f23426fce5'
	},
	{
		name: 'Michonne',
		email: 'michonne@michonne.com',
		gender: 'Female',
		preferredGender: 'Male',
		assessmentId: 'b6b867df-0a07-4756-a478-b6c2f25e287d',
		personalityBlend: 'Social/Mellow',
		personalityType1: 'Social',
		personalityType2: 'Mellow',
		compatiblePersonalities: ['Social', 'Mellow', 'Thoughtful'],
		image: 'http://i.imgur.com/KKwg2JR.jpg?1',
		hash: '4d8c5c7fde6d7bb8aaec0eabdc43631638440d563014097844e7eac989ba90649f0268ec6583223e8492b74c53f45278555a42e5e34683895000d4b2a6d9792c',
		salt: 'd5c86019bc045d28b81627f23426fce5'
	},
		{
		name: 'Leslie Knope',
		email: 'leslie@leslie.com',
		gender: 'Female',
		preferredGender: 'Male',
		assessmentId: '76c321b3-38de-4de1-88aa-58abbe68be01',
		personalityBlend: 'Mellow/Rational',
		personalityType1: 'Mellow',
		personalityType2: 'Rational',
		compatiblePersonalities: ['Mellow', 'Rational', 'Reliable'],
		image: 'http://i.imgur.com/jlqBm3t.png?1',
		hash: '4d8c5c7fde6d7bb8aaec0eabdc43631638440d563014097844e7eac989ba90649f0268ec6583223e8492b74c53f45278555a42e5e34683895000d4b2a6d9792c',
		salt: 'd5c86019bc045d28b81627f23426fce5'
	},
{
		name: 'Ted Mosby',
		email: 'ted@ted.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Thoughtful/Charismatic',
		personalityType1: 'Thoughtful',
		personalityType2: 'Charismatic',
		compatiblePersonalities: ['Adventurous', 'Charismatic'],
		image: 'http://i.imgur.com/ZBlLoc4.png?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
	{
		name: 'Marshall Ericksen',
		email: 'marshall@marshall.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Thoughtful/Reliable',
		personalityType1: 'Thoughtful',
		personalityType2: 'Reliable',
		compatiblePersonalities: ['Social', 'Mellow', 'Thoughtful'],
		image: 'http://i.imgur.com/OwNQnmQ.png?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
		{
		name: 'Barney Stinson',
		email: 'barney@barney.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Adventurous/Rational',
		personalityType1: 'Adventurous',
		personalityType2: 'Rational',
		compatiblePersonalities: ['Thoughtful', 'Rational', 'Reasonable'],
		image: 'http://i.imgur.com/rW5DulK.png?1',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
	{
		name: 'Negan',
		email: 'negan@negan.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Mellow/Charismatic',
		personalityType1: 'Mellow',
		personalityType2: 'Charismatic',
		compatiblePersonalities: 'Social/Thoughtful',
		image: 'http://i.imgur.com/JXu5Yup.jpg',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},
	{
		name: 'Sheldon Cooper',
		email: 'sheldon@sheldon.com',
		gender: 'Male',
		preferredGender: 'Female',
		assessmentId: String,
		personalityBlend: 'Rational/Thoughtful',
		personalityType1: 'Rational',
		personalityType2: 'Thoughtful',
		compatiblePersonalities: ['Social', 'Mellow'],
		image: 'http://i.imgur.com/FpdfByn.jpg',
		hash: '62b9ab89b0536023dc45ca8e9cf7fda486c2ba8ab48af7e6bc435a07f4aece52460ffe3818bf1c6b42f1400e2332776146f6f2af0d7cb23ac1dede0b5fe5718f',
		salt: 'eb35a205f5a0a503f3614d4d7a7c7e37'
	},



]

db.User.remove({}, function (){
	db.User.create(userList, function(err, users){
	    if (err) { return console.log('ERROR', err); }
	    console.log("all users:", users);
	    console.log("created", users.length, "users");
	    process.exit();
	});
})


