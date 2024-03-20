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

//PUT
app.put('/api/cars/:id', (req, res) => {
    //check if the car exists if not return 404
    const car = cars.find(c => c.id === parseInt(req.params.id))
    if(!car) return res.status(404).send('A car with that id doesn\'t exists')

    //validate the value the value and return 400
    const schema = Joi.string().min(2).required;
    const results = schema.validate(req.body.name);
    
    if(results.error) return res.status(400).send(results.error)

    //Otherwise update the value provided for that id
    car.name = req.body.name;
    res.send(course);

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))