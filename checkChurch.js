const { myConnection } = require('./dbConnection');

exports.checkChurches = (church_name,church_pass) => {
    
    let newConnections = myConnection();
    let query = `select * from table_name where church_name='${church_name}' and secret_password = '${church_pass}'`;
    console.log("Query ",query);
    
    return new Promise((resolve, reject) =>{
        newConnections.query(query,function(err, data){
        
            //Check for errors, disconnect and exit with failure.
    		if(err){
    			console.log("Failed To Query", err);
    			newConnections.end(function(err){
    				context.fail(0);
    			});
    			reject(`Failed To Query ${err}`);
    		}
    		//Disconnect and exit with success.
    		else{
    			newConnections.end(function(err){
     
    				if(err){
    				    console.log("Warning: disconnection failed", err);
    				}
    				resolve(data);
    			});
    		}
	    });
        
    });
};