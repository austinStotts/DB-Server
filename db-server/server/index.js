const express = require('express');
let bp = require("body-parser");
let pg = require("pg");
let cors = require("cors");
let app = express();

let selectAll = require("./queries/SelectAll");
let customQuery = require("./queries/CustomQuery");
let search = require("./queries/search");
let update = require("./queries/update");

app.use(cors())
app.use(bp())

// app.use(express.static("build"))

app.post("/update", (req, res) => {
    console.log("\nUPDATE:\n")
    update(req, res);
})

app.post("/search", (req, res) => {
    search(req, res);
})

app.post("/customquery", (req, res) => {
    customQuery(req, res);
})

app.get("/selectall", (req, res) => {
    selectAll(req, res);
})

app.get("/", (req, res) => {
    res.send("hello :3");
})

// app.get("/create", (req, res) => {
//     res.sendFile(__dirname + "../build")
// })


app.listen(3001, () => {
    console.log("\nRoger Roger !\n");
})