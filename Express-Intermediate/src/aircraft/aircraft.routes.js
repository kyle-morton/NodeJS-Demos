let express = require('express'),
    router = express.Router(),
    AircraftHandler = require('./aircraft.handler'),
    Aircraft = require('./aircraft.model'),
    aircraftHandler = new AircraftHandler();

//GET to localhost:3000/json
router.get('/', (req, res) => {
    res.json(aircraftHandler.aircrafts);
});

//POST to localhost:3000/json
router.post('/', (req, res) => {
    let aircraft = req.body;
    aircraftHandler.add(aircraft);
    res.send('Aircraft Created');
});

//export router so it can be applied to app's express server
module.exports = router;