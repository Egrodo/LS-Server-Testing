const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();
const Pet = require('./pets');

const STATUS = { 
    USER_ERROR: 422,
    SERVER_ERROR: 500
};

server.use(bodyParser.json());
server.use(morgan('combined'));

server.get('/', (req, res) => {
    res.json({ success: 'Welcome to the pets database.' });
});

server.post('/new_pet', (req, res) => {
    const pet = new Pet(req.body);
    pet.save((err, savedPet) => {
        if (err) {
            res.status(500);
            res.json(err);
        }
        res.json(savedPet);
    });
});

module.exports = { server };