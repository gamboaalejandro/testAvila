## API de Test de un Modelo de Usuario en NestJS

Este es un ejemplo de una API de Test de un Modelo de Usuario en NestJS, que incluye las siguientes funcionalidades:

1. Sign Up: Registro de un nuevo usuario en la base de datos.
2. Sign In: Inicio de sesión de un usuario existente en la base de datos.
3. Sign Out: Cierre de sesión de un usuario.
4. Buscar al usuario logueado: Obtención de la información del usuario que ha iniciado sesión.
5. Paginación de todos los usuarios: Obtención de una lista de todos los usuarios registrados en la base de datos, con la posibilidad de paginarlos.

Para ejecutar esta API, se requiere una conexión a una base de datos MongoDB y la instalación de Node.js y NestJS. A continuación, se proporcionan las instrucciones para ejecutar la aplicación.

### Configuración de la Base de Datos

Para ejecutar la aplicación, se requiere una instancia de MongoDB ejecutándose en el puerto 27017. También es posible configurar la conexión a la base de datos mediante variables de entorno, como se explica a continuación.

1. Cree una nueva base de datos de MongoDB.
2. Cree una colección de usuarios dentro de la base de datos.
3. Configure las variables de entorno `MONGODB_URI` con la URI de la base de datos MongoDB y `MONGODB_DB` con el nombre de la base de datos.
4. Asegúrese de que la base de datos MongoDB esté en ejecución.

### Instalación de Dependencias

Para instalar las dependencias necesarias, ejecute el siguiente comando en la raíz del proyecto:
``` npm install ```

### Ejecución de la Aplicación

Para iniciar la aplicación, se debe ejecutar el siguiente comando en la raíz del proyecto:

``` npm run start ```

### Documentación de la API

La documentación de la API se encuentra en Swagger y puede ser accesada a través de la siguiente dirección: `http://localhost:3000/docs`. La documentación incluye información sobre los endpoints disponibles, los parámetros necesarios y las respuestas que se pueden esperar.

### Endpoints Disponibles

A continuación, se describen los endpoints disponibles en la API:

#### 1. Sign Up

Este endpoint se utiliza para registrar un nuevo usuario en la base de datos.

- Método: `POST`
- URL: `/auth/signup`
- Parámetros de entrada:
  - `username`:nombre de usuario (string)
  - `email`: correo electrónico del usuario (string)
  - `password`: contraseña del usuario (string)
  -  `firstName`: primer nombre del usuario (string)
  -  `lastName`: apellido del usuario (string)
- Respuesta:
  - `message`: mensaje de éxito o error (string)
  - `user`: información del usuario registrado (object)

#### 2. Sign In

Este endpoint se utiliza para iniciar sesión con un usuario existente en la base de datos.

- Método: `POST`
- URL: `/auth/signin`
- Parámetros de entrada:
  - `username`: correo electrónico del usuario (string)
  - `password`: contraseña del usuario (string)
- Respuesta:
  - `token`: token JWT que se utilizará para autenticar al usuario en los endpoints protegidos (string)

#### 3. Sign Out

Este endpoint se utiliza para cerrar sesión de un usuario.

- Método: `POST`
- URL: `/auth/signout`
- Parámetros de entrada:
  - `id`: id del usuario a desloguear (string)
  - `Authorization`: token JWT del usuario (string)
- Respuesta:
  - `message`: mensaje de éxito o error (string)

#### 4. Buscar al usuario logueado

Este endpoint se utiliza para obtener la información del usuario que ha iniciado sesión.

- Método: `GET`
- URL: `/users/me`
- Parámetros de entrada:
  - `Authorization`: token JWT del usuario (string)
- Respuesta:
  - `user`: información del usuario que ha iniciado sesión (object)

#### 5. Paginación de todos los usuarios

Este endpoint se utiliza para obtener una lista de todos los usuarios registrados en la base de datos, con la posibilidad de paginarlos.

- Método: `GET`
- URL: `/users`
- Parámetros de entrada:
  - `offset`: offset a usar (number)
  - `limit`: número máximo de usuarios a obtener por página (number)
- Respuesta:
  - `count`: cantidad de usuarios totales(number)
  - `users`: lista de usuarios (array)
  - `totalPages`: número total de páginas (number)
  - `currentPage`: número de la página actual (number)

### Conclusión

Esta API de Test de un Modelo de Usuario en NestJS es unabuena base para un proyecto más grande y complejo. La documentación de Swagger hace que sea fácil entender cada endpoint y cómo utilizarlo. Esperamos que este Readme te haya sido útil para poder ejecutar la aplicación sin problemas.

## Tags

- NestJS
- MongoDB
- API
- Test
- Usuario
- Sign Up
- Sign In
- Sign Out
- Buscar Usuario
- Paginación
- Swagger
- Documentación
