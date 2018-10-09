let Repository = require('../data/data.repository'),
InputParameter = require('../data/inputParameter');

module.exports = class AircraftHandler {
    
    constructor() {
        this.aircrafts = [];
        this.repo = new Repository();
    }

    async getAircrafts() {
        return (await this.repo.callStoredProcedureAsync('spReadAircrafts')).recordset;
    }

    async getAircraftByID(id) {
        let response = await this.repo.callStoredProcedureAsync('spReadAircraftByID', [ new InputParameter('ID', id) ]);
        return response.recordset;
    }

};