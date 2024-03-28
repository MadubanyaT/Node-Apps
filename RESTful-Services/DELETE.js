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
app.delete('/api/cars/:id', (req, res) =>{
    //checking if the car with the given id exist
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if(!car) return res.status(404).send('A car with that id doesn\'t exists');

    //delete
    const carIndex = cars.indexOf(car);
    cars.splice(carIndex, 1);

    res.send(`${car.name} was removed from the list of cars.`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))