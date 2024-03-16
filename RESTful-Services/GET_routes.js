const express = require('express');
const app = express();

const cars = [
    {id: 1, name: 'BMW'},
    {id: 2, name: 'Toyota'},
    {id: 3, name: 'Volvo'},
    {id: 4, name: 'Mercedes'},
];

app.get('/', (req, res) =>{
    res.send('Welcome to the MyCar home page!');
});

            //Handling request//

//Listing all the cars' names
app.get('/api/cars', (req, res) =>{

    res.send(cars)
});

//Selecting a particular car by an id
app.get('/api/cars/:id', (req, res) =>{
    const Car = cars.find(c => c.id === parseInt(req.params.id));
    if(Car)
        return res.status(200).send(Car.name); //setting the status of the response
    else
        res.status(404).send('Car not found!');
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`))