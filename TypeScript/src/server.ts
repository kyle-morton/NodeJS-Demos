import * as express from 'express';
import * as bodyparser from 'body-parser';
const app = express();

app.use(bodyparser.json());

// app.use('', )

app.listen(3030);
console.log('listening on port 3030');

