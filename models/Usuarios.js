import { Schema, model } from 'mongoose';

const usuariosSchema = new Schema({
    email: {
        type: String, 
        unique: true,
        lowercase: true,
        trim : true, 
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

module.exports = model('Usuarios', usuariosSchema);