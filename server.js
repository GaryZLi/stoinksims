// import express from 'express';
// import next from 'next';
// import cors from 'cors';
// import helmet from 'helmet';
// import './backend/config';

// import apiV1 from './pages/api';

// const dev = process.env.NODE_ENV !== 'production';

// const app = next({dev});
// const handler = app.getRequestHandler();

// app.prepare()
// .then(() => {
//     const server = express();
//     console.log(__dirname, '-x-x-x-x-x-x--x-x-')
//     server.use(express.json());
//     server.use(cors());
//     server.use(helmet());
    
//     const port = process.env.PORT;

//     server.use('/api', apiV1);

//     server.get('*', handler);

//     server.listen(port, () => console.log('Listening in port', port));
// })
// .catch(err => {
//     console.log(err);
//     process.exit(1);
// });