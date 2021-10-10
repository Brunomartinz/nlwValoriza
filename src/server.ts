import express, { request, response } from 'express';
import "reflect-metadata";
import { router } from './routes';

import "./database"

const app = express();

//diz para o express que queremos trabalhar com o formato JSON
app.use(express.json());

app.use(router);


//http://localhost:3000
app.listen(3000, () => console.log('Server is running now'));

