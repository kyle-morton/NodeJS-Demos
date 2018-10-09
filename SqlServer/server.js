let express = require('express'),
bodyParser = require('body-parser'),
aircraftRouter = require('./aircraft/aircraft.routes'),
app = express();

// parse application/json
app.use(bodyParser.json());

// apply routes from aircraft router
app.use('/aircraft', aircraftRouter);

//start listening on port
let port = process.env.PORT ? process.env.PORT : 3030;
app.listen(port);
console.log('listening on port ' + port);