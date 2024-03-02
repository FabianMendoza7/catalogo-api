import Productos from '../models/Productos.js';

export const crearProducto = async (req, res, next) => {
    const producto = new Productos(req.body);

    try {
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