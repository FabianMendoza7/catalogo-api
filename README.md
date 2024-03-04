# Catalogo-API

Repositorio del Proyecto Catalogo-API (Backend) desarrollado con Node.js y Express.

<a href="https://github.com/FabianMendoza7/catalogo-api/">
    Visita el repositorio
</a>

<a href="https://greencode.deno.dev/">
    Visita mi blog personal
</a>

## Documentación de la API

Sigue los siguientes pasos para explorar la documentación:

- Vía web: https://documenter.getpostman.com/view/16132451/2sA2xcaah6
- O localmente:
  - Importa en `Postman` el archivo `Catalogo-API.postman_collection.json` que se encuentra en la raíz del proyecto.
  - Haz clic en el botón `...` sobre la colección y elije la opción `View documentation`. 

## Justificación del Stack tecnológico

- NodeJs: Runtime basado en JavaScript que permite ejecutar código del lado del servidor. Su modelo de operación no bloqueante y su capacidad para manejar múltiples conexiones concurrentes lo hacen ideal para aplicaciones de alta concurrencia, como las API. Además, al usar JavaScript tanto en el frontend como en el backend, se facilita la coherencia en el desarrollo.
  
- MongoDB: Base de datos NoSQL que utiliza un formato de documentos BSON (similar a JSON). En proyectos como éste donde la estructura de los datos puede variar y evolucionar con el tiempo, MongoDB proporciona flexibilidad al permitir esquemas dinámicos. También es eficiente para manejar grandes cantidades de datos no estructurados, como en un catálogo de productos, que podrá crecer con el tiempo.
  
- Mongoose: Biblioteca de modelado de objetos MongoDB para Node.js. Facilita la interacción con la base de datos MongoDB al proporcionar una capa de abstracción y definir modelos con esquemas predefinidos. Esto nos agiliza el desarrollo al simplificar las operaciones de CRUD y validar los datos antes de almacenarlos.
  
- Express: Framework para Node.js que simplifica la creación de aplicaciones web y APIs. Facilita la gestión de rutas, middleware y solicitudes HTTP. Al ser minimalista y modular, es ideal para construir APIs RESTful de manera eficiente, como la nuestra.
  
- Jsonwebtoken: Usado para la autenticación basada en tokens. En una API, el uso de tokens JWT es común para gestionar la autenticación y autorización. Proporciona una forma segura de transmitir información de usuario entre el cliente y el servidor sin necesidad de almacenar información de sesión en el servidor.
 
- Cors: (Cross-Origin Resource Sharing) es necesario que nuestra API pueda ser accedida desde un dominio diferente al de la aplicación frontend. Al permitir el acceso controlado desde orígenes específicos, CORS ayuda a garantizar la seguridad del navegador mientras permite solicitudes desde dominios autorizados.
  
- Bcrypt: Librería de hashing diseñada para almacenar contraseñas de manera segura. En un sistema de autenticación, es crucial almacenar las contraseñas de forma segura para proteger la información del usuario. Bcrypt utiliza un algoritmo de hashing lento y salting, lo que lo hace resistente a los ataques de fuerza bruta.
  
- DotEnv: Se utiliza para cargar variables de entorno desde un archivo .env. Esto es útil para gestionar configuraciones sensibles, pero en nuestro caso, facilita la gestión de diferentes configuraciones en entornos de desarrollo y producción.