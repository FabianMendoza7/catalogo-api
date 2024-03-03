import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import routes from './routes/index.js';
import errorsHandler from './middleware/errorsHandler.js';

// Obtener variables de entorno.
dotenv.config({ path: '.env' });

// Conectar mongo.
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

// Crear el servidor.
const app = express();

// Habilitar bodyparser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
    // Definir dominio(s) para recibir las peticiones.
    const whiteList = [process.env.FRONTEND_URL];
    const corsOptions = {
        origin: (origin, callback) => {
            // Revisar si la petición viene de un servidor que está en whiteList.
            const existe = whiteList.some(dominio => dominio === origin.toString());

            if(existe) {
                callback(null, true);
            } else {
                callback(new Error('No permitido por CORS'));
            }
        }
    }

    // Habilitar CORS.
    app.use(cors(corsOptions));

} else {
    app.use(cors());
}

// Rutas de la app.
app.use('/', routes());

// Middleware para manejo de errores.
app.use(errorsHandler);

// Escuchar por el puerto.
app.listen(5000);