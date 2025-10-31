//server.js
"use strict";
const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const jokeRoutes = require('./routes/jokeRoutes');

app.use('/jokes', jokeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT + "!");
});