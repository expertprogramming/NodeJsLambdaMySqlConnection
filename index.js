const { checkDbConnectionStatus } = require('./checkDbConnection');
const { checkChurches } = require('./checkChurch');
const { newSong } = require('./addSong');

exports.handler = async (event,context) => {
	
	console.log(event['body-json']);
	console.log(event['context']['resource-path']);
	
	if(event['context']['resource-path'] === '/checkconnection'){
		let status = await checkDbConnectionStatus();
		console.log(status);
		return JSON.stringify(status);
	}
	
	if(event['context']['resource-path'] === '/checkchurch'){
		let church_name = event['body-json']['church_name'];
		let church_pass = event['body-json']['church_pass'];
		let churchDetails= await checkChurches(church_name,church_pass);
		console.log(churchDetails);
		return churchDetails;
	}

	
	if(event['context']['resource-path'] === '/addsong'){
		let title = event['body-json']['songtitleid'];
		let song = event['body-json']['Song'];
		let newSongs= await newSong(title,song);
		console.log(newSongs);
		return newSongs;
	}
};