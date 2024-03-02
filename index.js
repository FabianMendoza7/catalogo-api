import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import cors from 'cors';

// Conectar mongo.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/catalogo');

// Crear el servidor.
const app = express();

// Habilitar bodyparser
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));

// Habilitar cors.
app.use(cors());

// Rutas de la app.
app.use('/', routes());

// Escuchar por el puerto.
app.listen(5000);