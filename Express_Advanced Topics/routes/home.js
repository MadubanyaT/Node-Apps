const express = require('express');
const router = express.Router() //Used for reference

//GET 
router.get('/', (req, res) =>{
    //res.send('Welcome MyCar Store!'); //response cycle is terminated after this response
    
    //Calling pug (used to display html on the home page)
    res.render('index', {title: 'MyCar', message: 'Welcome to MyCar!'});
});

module.exports = router;