import express from 'express';
import next from 'next';
import cors from 'cors';
import helmet from 'helmet';
import './backend/config';

import apiV1Routes from './backend/api/v1';

const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handler = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();
    
    server.use(express.json());
    server.use(cors());
    server.use(helmet());
    
    const port = process.env.PORT;

    server.use('/api/v1', apiV1Routes);

    server.get('*', handler);

    server.listen(port, () => console.log('Listening in port', port));
})
.catch(err => {
    console.log(err);
    process.exit(1);
});