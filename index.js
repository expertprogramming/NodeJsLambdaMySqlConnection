const { checkDbConnectionStatus } = require('./checkDbConnection');

exports.handler = async (event,context) => {
	
	
	//this code i am using based on my requirement 
	//I am usinng apigate due to that I have written my logic 
	console.log(event['body-json']);
	console.log(event['context']['resource-path']);
	
	if(event['context']['resource-path'] === '/checkconnection'){
		let status = await checkDbConnectionStatus();
		console.log(status);
		return JSON.stringify(status);
	}
	
	//based on your requirement you can write your logic to call the 
	// checkDbConnectionStatus function
	
	/*
	yoour logic goes here to call the checkDbConnectionStatus fuction
	*/
};