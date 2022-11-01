import express from 'express';
import { connectMongo } from './db/mongo.connection';

connectMongo();
const app = express();
const port = 5555;

app.use(express.json());

app.listen(port, () => console.log('listening on port ' + port));
