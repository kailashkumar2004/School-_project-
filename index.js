const mongoose = require("mongoose");
const express = require("express");
const db = require("./src/db/db");
const router = require("./router");
const PORT = 2210;
const app = express();
const date = new Date();
console.log("date-------------------->>", date);
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");


app.get("/", (req, res) => {
    res.send("helo world")
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.map(router => {
    app.use(router.path, router.handler)
});
app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
});