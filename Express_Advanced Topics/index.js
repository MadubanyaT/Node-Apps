const debug = require('debug')('app:IndexApp')
const config = require('config');
const Joi = require('joi'); //used for validation and returns a class
const helmet = require('helmet');
const morgan = require('morgan')
const logger = require('./middleware/logger'); //custom middleware
const authenticate = require('./middleware/Authentication');
const express = require('express');
const cars = require('./routes/cars')
const home = require('./routes/home')
const { urlencoded } = require('body-parser');
const app = express();

     //Setting environment
// process.env.NODE_ENV // can be set to development, testing or production
// app.get('env'); //used to get the environment of the application (default: development)

//setting up tamplate engine
app.set('view engine', 'pug');


//checks  if the body or request contains json text then passes it
// express middleware function
app.use(express.json()); // allowing the app to use the json middleware
app.use(express.urlencoded({extended: true})); // allows us to use key&value pairs
app.use(express.static('public')); // allows us to serve static files
app.use(helmet()); // check it on the web
// app.use(morgan('dev')); //Middleware from expressjs.com

app.use('/api/cars', cars); // Telling the app that for this route use cars.js
app.use('/', home); // calling the home page from the routes folder

if(app.get('env') === 'production'){
    // Setting the DEBUG on windows: set DEBUG=app:IndexApp
    debug('Debugging for production has started');
}

// Configurations
// setting environment on windows: 'set NODE_ENV=production'
console.log('Application environment: ' + app.get('env')); //getting the environment
console.log('Application Name: ' + config.get('name')); // getting info about my config based on the environment
console.log('Mail password:' + config.get('mail.password')); // password read from an environment variable not config

//custom middleware
app.use(logger);
app.use(authenticate);

//PORTS
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));