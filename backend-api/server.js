//server.js
"use strict";
const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const jokeRoutes = require('./routes/jokeRoutes');

app.use('/jokebook/jokes', jokeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Server listening on port: " + PORT + "!");
});