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


//POST
app.post('/api/cars', (req, res) =>{
    //Validating data wit joi
    const schema = Joi.string().min(2).required;
    let results = schema.validate(req.body.name);

    if(results.error) return res.status(400).send(results.error);

    const car = {id: cars.length +1, name: req.body.name}
    cars.push(car)
    res.send(car);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))