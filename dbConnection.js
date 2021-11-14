const mysql = require('mysql');

//based on your scenario you can use the one of code from given below
//this code is used to provide all credential inside the code itself
// exports.myConnection = () => {
//     var params = {
//         host: 'db host url ',
//         user: '',
//         password: '',
//         database: ''
//     };

//     return mysql.createConnection(params);
// };


//this code access the credent from lambda environment variable
exports.myConnection = () => {
    var params = {
        host: process.env.host,
        user: process.env.username,
        password: process.env.password,
        database: process.env.dbname
    };

    return mysql.createConnection(params);
};