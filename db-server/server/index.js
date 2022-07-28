const express = require('express');
let bp = require("body-parser");
let pg = require("pg");
let cors = require("cors");
let app = express();

let selectAll = require("./queries/SelectAll");
let customQuery = require("./queries/CustomQuery");
let search = require("./queries/search");

app.use(cors())
app.use(bp())

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
    res.status(200).json({"hello": "*waves*"})
})



app.listen(3001, () => {
    console.log("\nRoger Roger !\n");
})