import { Schema, model } from 'mongoose';

const usuariosSchema = new Schema({
    email: {
        type: String, 
        lowercase: true,
        trim : true, 
        unique: true,
        required: [true, 'Email es requerido']
    },
    nombre : {
        type: String, 
        required: [true, 'Nombre es requerido']
    }, 
    password: {
        type: String, 
        required: [true, 'Password es requerido']
    }
});

export default model('Usuarios', usuariosSchema);