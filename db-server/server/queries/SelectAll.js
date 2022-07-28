let pg = require("pg");


const connectionString = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf";


function selectAll (req, res) {
    
    let client = new pg.Client(connectionString);
    client.connect(function(err) {
    if(err) {console.log("Connection Error in SELECT ALL ->", err); client.end()}
        client.query(`SELECT * FROM shows;`, (err, response) => {
            if(err) {console.log("Database Error in SELECT ALL", err); client.end(); res.status(500).send()}
            // console.log(response)
            else {
                res.status(200).json({data: response.rows});
            }
        });
    });
}

module.exports = selectAll;