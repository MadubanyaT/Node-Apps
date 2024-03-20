const Joi = require('joi'); //used for validation and returns a class
const express = require('express');
const app = express();

app.use(express.json()); // allowing the app to use the json middleware

const cars = [
    {id: 1, name: 'BMW'},
    {id: 2, name: 'Toyota'},
    {id: 3, name: 'Volvo'},
    {id: 4, name: 'Mercedes'},
];

//DELETE


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))