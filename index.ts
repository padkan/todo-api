import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Task } from './src/tasks/tasks.entity';
import { taskRouter } from './src/tasks/tasks.router';

// Instantiate express
const app: Express = express();
dotenv.config();

//Parse request Body
app.use(bodyParser.json());

//use CORS
app.use(cors());

// Create Datebase Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

// Server Port
const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    const server = app.listen(port);
    console.log('Data Source has been initialized!');

    server.keepAliveTimeout = 15 * 1000;
    server.headersTimeout = 16 * 1000;
  })
  .catch((err) => {
    console.log('Error during Data Source initialization', err);
  });

app.use('/', taskRouter);
