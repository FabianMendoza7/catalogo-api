import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Usuarios from '../models/Usuarios.js';

export const registrarUsuario = async (req, res) => {
    // Leer los datos del usuario y colocarlos en el modelo.
    const usuario = new Usuarios(req.body);
    usuario.password = await bcrypt.hash(req.body.password, 12);

    try {
        await usuario.save();
        res.json({mensaje : 'Usuario Creado Correctamente'});

    } catch (error) {
        console.log(error);
        res.json({mensaje : 'Hubo un error'});
    }
}

export const autenticarUsuario = async (req, res, next) => {
    // Buscar el usuario.
    const { email, password } = req.body;
    const usuario = await Usuarios.findOne({ email });

    if(!usuario) {
        // Si el usuario no existe.
        await res.status(401).json({mensaje : `El usuario ${email} no existe`});
        next();

    } else {
        // El usuario existe, verificar si el password es correcto o incorrecto.
        if(!bcrypt.compareSync(password, usuario.password )) {
            // Si el password es incorrecto.
            await res.status(401).json({ mensaje : 'Password Incorrecto'});
            next();
            
        } else {
            // Password correcto, firmar el token.
            const token = jwt.sign({
                email : usuario.email, 
                nombre: usuario.nombre, 
                id : usuario._id
            }, 
            'LLAVESECRETA', 
            {
                expiresIn : '1h'
            }); 

            // Retornar el TOKEN.
            res.json({ token });
        }
    }
}