const mongoose = require('mongoose');

//creating a connection
mongoose.connect('mongodb://localhost/Testing')
    .then(() => console.log('connected to database...'))
    .catch((err) => console.error('An error occured... ', err));


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


//Getting info from the database
async function getMotorcycles(){

    const motorcycle = await Motorcycle.find({wheels: 2})
        .sort({name: 1}); // 1 means asc & -1 desc
    //basically yu can manipulate the data on how you wanna receive it.

}