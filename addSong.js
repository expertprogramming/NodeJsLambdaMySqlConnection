const { myConnection } = require('./dbConnection');
const { escape } = require('sqlstring');
let response = {};

exports.newSong = async(title, song) => {

    let newSongs = escape(song);
    let newConnections = myConnection();
    let query = `INSERT INTO table_name (song_title_id,song) VALUES ('${title}',${newSongs})`;
    console.log("Query ", query);

    return new Promise((resolve, reject) => {
        newConnections.query(query, function(err, data) {

            //Check for errors, disconnect and exit with failure.
            if (err) {
                console.log("Failed To Query", err);
                newConnections.end(function(err) {
                    context.fail(0);
                });
                reject(`Failed To Query ${err}`);
            }
            //Disconnect and exit with success.
            else {
                newConnections.end(function(err) {

                    if (err) {
                        console.log("Warning: disconnection failed", err);
                    }
                    resolve(data);
                    // console.log(Object.keys(data).length);
                });
            }
        });

    });
}