import { Schema, model } from 'mongoose';

const productosSchema = new Schema({
    nombre : {
        type: String,
        trim: true
    },
    descripcion : {
        type: String,
        trim: true
    },    
    precio: {
        type: Number
    }
});

export default model('Productos', productosSchema);