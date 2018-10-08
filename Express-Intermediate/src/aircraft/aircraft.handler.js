let Aircraft = require('./aircraft.model');

module.exports = class AircraftHandler {
    
    constructor() {
        this.aircrafts = [
            new Aircraft("123", "F7X"),
            new Aircraft("456", "F8X"),
            new Aircraft("789", "F900")
        ];
    }

    add(aircraft) {
        this.aircrafts.push(aircraft);
    }

    clear() {
        this.aircrafts = [];
    }

};

