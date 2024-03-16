const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('Home page');
});

app.get('/api/cars', (req, res) => {
    res.send([1, 2, 3]);
});


//parameter (:id)
app.get('/api/cars/:month/:year', (req, res) =>{
    //req.params: allows us to get the user input e.g., params.month, etc
    res.send(req.params)
});

//Query
app.get('/api/cars/:month/:year', (req, res) =>{
    res.send(req.query)
   });


//environment variale its value is set outside this app otherwise give it 4000
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}...`));



// //hardcoded port (it's not gonna work on production env)
// app.listen(4000, () => console.log(`Listening on port 4000...`));




