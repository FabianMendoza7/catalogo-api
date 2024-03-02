import express from 'express';
import { crearProducto, mostrarProductos, mostrarProducto, 
         actualizarProducto, eliminarProducto, buscarProducto } from '../controllers/productosController.js';
import { registrarUsuario, autenticarUsuario } from '../controllers/usuariosController.js';

// Middleware para proteger las rutas.
import auth from '../middleware/auth.js';

const router = express.Router();

export default () => {

    /** PRODUCTOS */

    // Nuevos productos
    router.post('/productos', 
        crearProducto
    );

    // Muestra todos los productos.
    router.get('/productos', 
        mostrarProductos
    );

    // Muestra un producto en especifico por su ID.
    router.get('/productos/:idProducto', 
        mostrarProducto
    );

    // Actualizar un producto en especifico por su ID.
    router.put('/productos/:idProducto', 
        actualizarProducto
    );

    // Eliminar Productos.
    router.delete('/productos/:idProducto', 
        eliminarProducto
    );

    // Búsqueda de Productos.
    router.post('/productos/busqueda/:query',
        buscarProducto
    );

    /** USUARIOS */

    router.post('/crear-cuenta', 
        //auth,
        registrarUsuario
    );

    router.post('/iniciar-sesion',
        autenticarUsuario
    );    

    return router;
}
