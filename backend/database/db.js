import { Sequelize } from 'sequelize';
import 'dotenv/config';
import mysql from 'mysql2/promise';


const conn = await mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

conn.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database: ', error));

export default sequelize; 