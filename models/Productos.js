import { Schema, model } from 'mongoose';

const productosSchema = new Schema({
    nombre : {
        type: String,
        trim: true,
        required: [true, 'Nombre es requerido']
    },
    descripcion : {
        type: String,
        trim: true,
        required: [true, 'Descripción es requerida']
    },    
    precio: {
        type: Number,
        required: [true, 'Precio es requerido'],
        min: [1, 'Precio mínimo permitido: 1'],
        max: [99999999, 'Precio máximo permitido: 99999999']
    }
});

export default model('Productos', productosSchema);