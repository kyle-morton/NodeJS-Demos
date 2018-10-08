let express = require('express'),
bodyParser = require('body-parser'),
aircraftRouter = require('./aircraft/aircraft.routes'),
app = express();

// parse application/json
app.use(bodyParser.json());

// apply routes from aircraft router
app.use('/aircraft', aircraftRouter);

//start listening on port
app.listen(3030);
console.log('listening on port 3030');

