let express = require('express'),
bodyParser = require('body-parser'),
os = require('os'),
aircraftRouter = require('./aircraft/aircraft.routes'),
app = express();

// parse application/json
app.use(bodyParser.json());

// apply routes from aircraft router
app.use('/aircraft', aircraftRouter);

app.get('/', (req, res) => {
    let username = req.headers['x-iisnode-auth_user'];
    res.send(username);
});

//start listening on port
let port = process.env.PORT ? process.env.PORT : 3030;
app.listen(port);
console.log('listening on port ' + port);

