const Joi = require('joi'); //used for validation and returns a class
const express = require('express');
const app = express();

//checks  if the body or request contains json text then passes it
app.use(express.json()); // allowing the app to use the json middleware

const cars = [
    {id: 1, name: 'BMW'},
    {id: 2, name: 'Toyota'},
    {id: 3, name: 'Volvo'},
    {id: 4, name: 'Mercedes'},
];

//GET 
app.get('/', (req, res) =>{
    res.send('Welcome MyCar Store!'); //response cycle is terminated after this response
});

app.get('/api/cars', (req, res) => {
    res.send(cars)
});

app.get('/api/cars/:id', (req, res) => {
    let car = cars.find(c => c.id === parseInt(req.params.id))
    if(!car) return res.send(`A car with this id '${req.params.id}' was not found.`);

    res.send(`The name of the car with this id '${req.params.id}' is ${car.name}`)
});

//POST
app.post('/api/cars', (req, res) =>{
    //Validating data wit joi
    let {error} = CarValidation(req.body.name); //function destructuring
    if(error) return res.status(400).send(error);

    const car = {id: cars.length +1, name: req.body.name}
    cars.push(car)
    res.send(car);
});

//PUT
app.put('/api/cars/:id', (req, res) => {
    //check if the car exists if not return 404
    const car = cars.find(c => c.id === parseInt(req.params.id))
    if(!car) return res.status(404).send('A car with that id doesn\'t exists');

    //validate the value the value and return 400
 
    // let results =  CarValidation(req.body.name);
    // if(results.error) return res.status(400).send(results.error)
         //ALTERNATIVE //
    let {error} = CarValidation(req.body.name); //function destructuring (returns an error or value)
    if(error) return res.status(400).send(error);
   
    //Otherwise update the value provided for that id
    car.name = req.body.name;
    res.send(car);
});

function CarValidation(Car){ //Retuns an error or a value
    const schema = Joi.string().min(2).required();
    return schema.validate(Car); 
};

//DELETE
app.delete('/api/cars/:id', (req, res) =>{
    //checking if the car with the given id exist
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if(!car) return res.status(404).send('A car with that id doesn\'t exists');

    //delete
    const carIndex = cars.indexOf(car);
    cars.splice(carIndex, 1);

    res.send(`This car ${car.name} was removed`);
});


//PORTS
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));