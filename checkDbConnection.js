const { myConnection } = require('./dbConnection');

exports.checkDbConnectionStatus = () => {
    
    let newConnections = myConnection();
    
    return new Promise((resolve, reject) =>{
        newConnections.connect(function(err, data){
        
            //Check for errors, disconnect and exit with failure.
    		if(err){
    			console.log("DB Connection Failed", err);
    			newConnections.end(function(err){
    				context.fail(0);
    			});
    			reject(`DB Connection Error ${err}`);
    		}
    		//Disconnect and exit with success.
    		else{
    			newConnections.end(function(err){
     
    				if(err){
    				    console.log("Warning: disconnection failed", err);
    				}
                    console.log("connected successfully");
    				resolve(`success connected to DB ${JSON.stringify(data)}`);
    			});
    		}
	    });
        
    });
};