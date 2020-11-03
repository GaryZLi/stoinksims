import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import apiV1Routes from '../backend/api/v1';
import '../backend/config';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const port = 5000;

app.use('/api/v1', apiV1Routes);

app.listen(port, () => console.log('Listening in port', port));