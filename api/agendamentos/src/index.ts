import { config } from 'dotenv';
config();

import express from 'express';
import { connectMongo } from './db/mongo.connection';

import { router } from './appointments/routes/appointments.route';

connectMongo();
const app = express();
const port = 4040;

app.use(express.json());

app.use(router);

app.listen(port, () => console.log('listening on port ' + port));
