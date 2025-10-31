"use strict";
const jokeController = require('../controllers/jokeController');
const express = require("express");
const router = express.Router();
router.get("/", jokeController.fetchAllJokes);
router.get("/:id", jokeController.fetchJokeById);
router.delete("/:id", jokeController.removeJoke);
router.post("/", jokeController.createJoke);
module.exports = router;