let express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// parse application/json
app.use(bodyParser.json())

// Define routes 

 //GET to localhost:3000
app.get('/', (req, res) => {
    res.send('hello, world!');
});

//GET to localhost:3000/json
app.get('/json', (req, res) => {
    res.json({
        message: "here's some JSON"
    });
});

//POST to localhost:3000/json
app.post('/json', (req, res) => {
    let json = req.body;
    json.message = 'Message modified by Node';
    res.send(json);
})

//start listening on port
app.listen(3000);
console.log('listening on port 3000');

