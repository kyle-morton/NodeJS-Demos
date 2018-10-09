const sql = require('mssql');

module.exports = class Repository {

    constructor() { 
    }

    getConnection() {
        return new sql.ConnectionPool({
            user: 'NodeUser',
            password: 'NodeJS123',
            server: 'localhost',
            database: 'NodeDatabase',
            options: {
                encrypt: false
            }
        });
    }

    /** 
     * Call stored procedure using ES7 async/await feature
     */
    async callStoredProcedureAsync (procName, inputParams) {

        let pool = await this.getConnection().connect();
        let request = pool.request();

        request = this.addInputParametersToRequest(request, inputParams);

        let result = await request.execute(procName);
        return result;
    }

    /**
     * Call stored procedure the old, lame way w/ promises
     */
    callStoredProcedure(procName, inputParams) {

        return new Promise((resolve, reject) => {
            const connection = this.getConnection();

            connection.connect()
            .then(pool => {

                //new db request, add params if found                
                let request = pool.request();
                request = this.addInputParametersToRequest(request, inputParams);
                
                //call stored proc
                request
                .execute(procName)
                .then(result => {
                    resolve(result.recordset);
                })
                .catch(err => {
                    console.error("error: " + err);
                    reject();
                })
            })
            .catch(err => {
                console.error("error: " + err);
                reject();
            })

        });
    }

    addInputParametersToRequest(request, inputParams) {

        if (!inputParams || inputParams.length == 0) 
            return request; 

        inputParams.forEach(param => {
            request.input(param.Name, param.Value);
        });
        return request;

    }
    
}
