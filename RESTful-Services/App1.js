const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('Home page');
});

app.get('/api/list', (req, res) => {
    res.send([1, 2, 3]);
});


// //hardcoded port (it's not gonna work on production env)
// app.listen(4000, () => console.log(`Listening on port 4000...`));

//environment variale its value is set outside this app otherwise give it 4000
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}...`));





