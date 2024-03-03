import { Schema, model } from 'mongoose';

const usuariosSchema = new Schema({
    email: {
        type: String, 
        unique: true,
        lowercase: true,
        trim : true, 
        required: true
    },
    nombre : {
        type: String, 
        required: 'Agrega tu Nombre'
    }, 
    password: {
        type: String, 
        required: true
    }
});

export default model('Usuarios', usuariosSchema);