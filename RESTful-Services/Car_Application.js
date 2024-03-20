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

//GET methods
app.get('/', (req, res) =>{
    res.send('Welcome MyCar Store!')
});

app.get('/api/cars', (req, res) => {
    res.send(cars)
});

app.get('/api/cars/:id', (req, res) => {
    let car = cars.find(c => c.id === parseInt(req.params.id))
    if(!car){
       return res.send(`A car with this id '${req.params.id}' was not found.`)
    }
    res.send(`The name of the car with this id '${req.params.id}' is ${car.name}`)
});

//POST
app.post('/api/cars', (req, res) =>{
    //Validating data wit joi
    const schema = Joi.string().min(2);
    let results = schema.validate(req.body.name)

    if(results.error) return res.status(400).send(results.error);

    const car = {id: cars.length +1, name: req.body.name}
    cars.push(car)
    res.send(car);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))