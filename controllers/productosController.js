import multer from 'multer';
import { nanoid } from 'nanoid';
import Productos from '../models/Productos.js';

// Configuración de multer.
const configuracionMulter = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${nanoid()}.${extension}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'));
        }
    },
};

// Middleware de carga de archivos.
const upload = multer(configuracionMulter).single('imagen');

export const subirArchivo = (req, res, next) => {
    upload(req, res, (error) => {
        if(error) {
            res.json({mensaje: error});
        }
        return next();
    });
}

export const crearProducto = async (req, res, next) => {
    const producto = new Productos(req.body);

    try {
        // if(req.file.filename) {
        //     producto.imagen = req.file.filename;
        // }
        await producto.save();
        res.json({mensaje : 'Se agregó un nuevo producto'})

    } catch (error) {
        console.log(error);
        next();
    }
} 

export const mostrarProductos = async (req, res, next) => {
    try {
        // Obtener todos los productos.
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un producto en específico por su ID.
export const mostrarProducto = async (req, res, next) => {
    const producto = await Productos.findById(req.params.idProducto);

    if(!producto) {
        res.json({mensaje : 'Ese producto no existe'});
        return next();
    }

    // Mostrar el producto.
    res.json(producto);
}

// Actualiza un producto por su id.
export const actualizarProducto = async (req, res, next) => {
    try {
        // Construir un nuevo producto.
        let nuevoProducto = req.body;

        // // Verificar si hay imagen nueva.
        // if(req.file) {
        //     nuevoProducto.imagen = req.file.filename;
        // } else {
        //     let productoAnterior = await Productos.findById(req.params.idProducto);
        //     nuevoProducto.imagen = productoAnterior.imagen;
        // }
        
        let producto = await Productos.findOneAndUpdate({_id : req.params.idProducto}, nuevoProducto, {
            new : true,
        });

        res.json(producto);

    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un producto via ID
export const eliminarProducto = async (req, res, next) => {
    try {
        await Productos.findByIdAndDelete({ _id : req.params.idProducto });
        res.json({mensaje : 'El producto se ha eliminado'});

    } catch (error) {
        console.log(error);
        next();
    }
}

export const buscarProducto = async (req, res, next) => {
    try {
        // Obtener el query.
        const { query } = req.params;
        const producto = await Productos.find({ nombre: new RegExp(query, 'i') });
        res.json(producto);

    } catch (error) {
        console.log(error);
        next();
    }
}