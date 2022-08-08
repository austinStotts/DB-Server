let pg = require("pg");


const connectionString = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf";


function update (req, res) {
    console.log("REQUEST BODY: ", req.body.showid)
    let client = new pg.Client(connectionString);
    client.connect(function(err) {
    if(err) {console.log("Connection Error in UPDATE ->", err); client.end()}
        client.query(`INSERT INTO shows(showid, showjson) VALUES('${req.body.showid}', '${req.body.showjson}') ON CONFLICT(showid) DO UPDATE SET showjson = EXCLUDED.showjson;`, (err, response) => {
            if(err) {console.log("Database Error in UPDATE", err); client.end(); res.status(500).send()}
            // console.log(response)
            else {
                client.end();
                res.status(200);;
            }
        });
    });
}

module.exports = update;