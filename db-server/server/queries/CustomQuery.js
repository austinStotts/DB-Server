let pg = require("pg");


const connectionString = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf";


function selectAll (req, res) {
    console.log(req.body);
    let client = new pg.Client(connectionString);
    client.connect(function(err) {
    if(err) {console.log("Connection Error in CUSTOM QUERY ->", err); client.end()}
        client.query(`${req.body.value}`, (err, response) => {
            if(err) {console.log("Database Error in CUSTOM QUERY", err); client.end(); res.status(500).send()}
            else {
                client.end();
                res.status(200).json({data: response.rows});
            }
        });
    });
}

module.exports = selectAll;