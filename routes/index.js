import express from 'express';
import { subirArchivo, crearProducto, mostrarProductos, mostrarProducto, 
         actualizarProducto, eliminarProducto, buscarProducto } from '../controllers/productosController.js';
//import usuariosController from '../controllers/usuariosController.js';
// Middleware para proteger las rutas.
//import auth from '../middleware/auth.js';

const router = express.Router();

export default () => {

    /** PRODUCTOS */

    // Nuevos productos
    router.post('/productos', 
        // subirArchivo,
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
        //subirArchivo,
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

    // // Usuarios.
    // router.post('/crear-cuenta', 
    //     auth,
    //     usuariosController.registrarUsuario
    // );

    // router.post('/iniciar-sesion',
    //     usuariosController.autenticarUsuario
    // );    

    return router;
}
