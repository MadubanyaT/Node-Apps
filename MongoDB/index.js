const mongoose = require('mongoose');

//creating a connection
mongoose.connect('mongodb://localhost/Testing')
    .then(() => console.log('connected to database...'))
    .catch((err) => console.error('An error occured... ', err));

//ceating a schema
const carsSchema = new mongoose.Schema({
    //key value pairs for the car
    name: String,
    manufacturer: String,
    companies: [ String ],
    releasedDate: {type: Date, default: Date.now},
    isSold: Boolean
});

//Compiling the schema into a model
const Car = mongoose.model('Car', carsSchema);

async function CreateACar(){
//creating a car
const car = new Car({
    name: 'C63',
    manufacturer: 'Mercedes Benz',
    companies: ['Auto Trader'],
    isSold: true
});

const results = await car.save(); //saves the created car
console.log(results);
}


const motorcycleSchema = new mongoose.Schema({
    //key value pairs for the car
    name: String,
    manufacturer: String,
    wheels: Number,
    releasedDate: {type: Date, default: Date.now},
    isSold: Boolean
});

//creating a motorcycle database
const Motorcycle = mongoose.model('Motocycle', motorcycleSchema);

async function CreateMotorCycle(){
    const motorcycle = new Motorcycle({
        name: 'Yahamato 7',
        manufacturer: 'BWM',
        wheels: 2,
        isSold: true
    });

    const results = await motorcycle.save();
    console.log(results);
}

CreateMotorCycle();