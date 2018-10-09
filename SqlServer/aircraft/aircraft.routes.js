let express = require('express'),
router = express.Router(),
AircraftHandler = require('./aircraft.hander'),
aircraftHandler = new AircraftHandler();

//GET all aircrafts
router.get('/', async (req, res) => {
    try {
        res.json(await aircraftHandler.getAircrafts());
    }catch(err) {
        res.json({message: 'error!'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await aircraftHandler.getAircraftByID(req.params.id));
    }catch(err) {
        res.json({message: 'error!'});
    }
});

//export router so it can be applied to app's express server
module.exports = router;