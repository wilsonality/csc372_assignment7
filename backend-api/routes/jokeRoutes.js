"use strict";
const jokeController = require('../controllers/jokeController');
const express = require("express");
const router = express.Router();
// http://localhost:3000/jokebook/jokes + :
router.get("/", jokeController.fetchAllJokes);
router.get("/id/:id", jokeController.fetchJokeById);
router.delete("/id/:id", jokeController.removeJoke);
router.post("/", jokeController.createJoke);
router.get("/category/:category", jokeController.fetchJokeByCategory);
router.get("/category", jokeController.fetchCategories);
module.exports = router;