import { ResourceNotFoundError } from '../utils/errorsType.js';

export default (error, _req, res, _next) => {
    if(error.name === 'ValidationError') {
            const errores = Object.values(error.errors).map((e) => e.message);
            return res.status(422).json({ mensaje: 'Datos de entrada no válidos', errores });
    }

    if (error instanceof ResourceNotFoundError) {
        return res.status(404).json({ mensaje: error.message });
    }
    
    return res.status(500).json({ mensaje: 'Hubo un error inesperado' });
}