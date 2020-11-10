// import pg from 'pg';
const pg = require('pg');

const pool = new pg.Pool({
    user: process.env.AWS_USER,
    password: process.env.AWS_PASSWORD,
    host: process.env.AWS_HOST,
    port: process.env.AWS_PORT,
    database: process.env.AWS_DATABASE,
});

module.exports = pool;