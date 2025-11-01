"use strict";
const model = require('../models/jokeModel');
async function fetchAllJokes(req, res) {
    try {
        const jokes = await model.getAllJokes();
        res.json(jokes);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error: failed to load all jokes.");
    }   
}

async function fetchJokeById(req, res) {
    const id = req.params.id;
    if (id) {
        try {
            const joke = await model.getJokeById(id);
            res.json(joke);
        } catch (err) {
            console.error(err);
            res.status(500).send("Server error: failed to fetch joke by ID.");
        }
    } else {
        res.status(400).send("Missing required id param!");
    }   
}

async function fetchJokeByCategory(req, res) {
    const cat = req.params.category;
    if (cat) {
        try {
            const joke = await model.getJokeByCategory(cat);
            res.json(joke);
        } catch (err) {
            console.error(err);
            res.status(500).send("Server error: failed to fetch joke by category.");
        }
    } else {
        res.status(400).send("Missing required category param!");
    }   
}

async function removeJoke(req, res) {
    const id = req.params.id;
    if (id) {
        try {
            const deletedCount = await model.deleteJoke(id);    
            if (deletedCount > 0) {
                res.send(`Joke with id ${id} deleted successfully.`);
            } else {
                res.status(404).send("Joke not found.");
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Server error: failed to remove joke.");
        }
    } else {
        res.status(400).send("Missing required id param!");
    }
}

async function createJoke(req, res) {
    const { setup, delivery, category } = req.body; 
    if (setup && delivery && category) {
        try {
            const newJoke = await model.addJoke(setup, delivery, category);
            res.status(201).json(newJoke);
        } catch (err) {
            console.error(err);
            res.status(500).send("Server error: failed to create joke.");
        }
    } else {
        res.status(400).send("Missing required input fields!");
    }
}

async function fetchCategories(req, res) {
    try {
        const categories = await model.getCategories();
        res.json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error: failed to fetch categories.");
    }
}

module.exports = {
    fetchAllJokes,
    fetchJokeById,
    removeJoke,
    createJoke,
    fetchJokeByCategory,
    fetchCategories
};