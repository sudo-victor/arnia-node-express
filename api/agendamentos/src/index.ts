import { config } from 'dotenv';
config();

import express from 'express';
import { connectMongo } from './db/mongo.connection';

import { appointmentRouter } from './appointments/routes/appointments.route';
import { customerRouter } from './customers/routes/customer.route';

connectMongo();
const app = express();
const port = 4040;

app.use(express.json());

app.use('/appointments', appointmentRouter);
app.use('/customers', customerRouter);


app.listen(port, () => console.log('listening on port ' + port));
