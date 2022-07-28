let pg = require("pg");


const connectionString = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf";


function search (req, res) {
    // console.log(req.body);
    let client = new pg.Client(connectionString);
    client.connect(function(err) {
    if(err) {console.log("Connection Error in SEARCH QUERY ->", err); client.end()}
        client.query(`SELECT * FROM shows WHERE showid LIKE('%${req.body.value}%');`, (err, response) => {
            if(err) {console.log("Database Error in SEARCH QUERY", err); client.end(); res.status(500).send()}
            // console.log(response)
            else {
                res.status(200).json({data: response.rows});
            }
        });
    });
}

module.exports = search;