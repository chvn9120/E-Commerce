import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';
import credentials from './../credentials.js';

const conn = await mysql.createConnection({
    user: credentials.db_config.DB_USER,
    password: credentials.db_config.DB_PASSWORD
});

conn.query(`CREATE DATABASE IF NOT EXISTS ${credentials.db_config.DB_NAME};`);

const sequelize = new Sequelize(
    credentials.db_config.DB_NAME,
    credentials.db_config.DB_USER,
    credentials.db_config.DB_PASSWORD,
    {
        host: credentials.db_config.DB_HOST,
        dialect: "mysql",
    }
);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database: ', error));
    
export default sequelize;
