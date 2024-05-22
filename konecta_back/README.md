# konecta backend

Este proyecto se desarrolló con PostgreSQL instalado en un contenedor Docker y con el gestor pgAdmin4.

Se requiere Node.js y npm.

### Base de datos

Si tienes Docker, simplemente puedes ejecutar el comando `docker-compose up -d postgres`. Esto iniciará el contenedor para PostgreSQL con las credenciales que se encuentran en el archivo docker-compose:

```yaml
postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: andrekasjas
      POSTGRES_PASSWORD: admin
      POSTGRES_DB: konecta
    ports:
      - 5432:5432
    volumes:
      - ./konecta_back/postgres_data:/var/lib/postgresql/data
```

Si no tienes Docker o prefieres el script de la creación de las tablas, se encuentra en el archivo `konect.sql`.

Una vez que tengas la base de datos lista, debes crear el archivo `.env` siguiendo la estructura del `.env.example`:

```dotenv
PORT=5000  # Puerto por el que arranca Node.js
DB_USER=andrekasjas  # Usuario de la base
DB_PASSWORD=admin  # Contraseña de la base
DB_HOST=localhost  # Host de la base
DB_NAME=konecta  # Nombre de la base
DB_PORT=5432  # Puerto de la base
JWT_SECRET=konecta  # Firma para las JWT
```

Instala las librerías y dependencias que requiere nuestro proyecto con:

```bash
npm i
```

Si no puedes usar el script, como siguiente paso después de poner los datos en el `.env`, puedes ejecutar el comando:

```bash
npm run migrations:run
```

Este, con ayuda del ORM Sequelize, creará las tablas correspondientes en la base indicada en el `.env`.

De esta manera, ya tenemos la API lista para su uso. Los CORS se dejaron abiertos ya que es un proyecto de prueba técnica.

## Mejores prácticas y seguridad

- Se utilizó `async`/`await` para el manejo de operaciones asíncronas.

- Manejo de paginables en consultas que probablemente serán de gran cantidad de datos como los `getall`.

- La API se desarrolló con Express.

### Middlewares creados

Se han creado varios middlewares para mejorar el control y la gestión de la aplicación:

- **Autenticación**: Verifica los tokens JWT para asegurar que solo los usuarios autenticados puedan acceder a ciertos endpoints protegidos.

- **Manejo de errores**: Captura errores y envía respuestas adecuadas al cliente, mejorando la experiencia del usuario y facilitando la depuración.

- **Validación de datos**: Asegura que las solicitudes contengan todos los campos necesarios y que los datos sean válidos antes de procesar la solicitud, reduciendo así los posibles errores y mejorando la integridad de los datos.

Se utilizó la biblioteca Boom para la creación de objetos de error HTTP y Joi para validar los datos requeridos en los endpoints.

Para gestionar la interacción con la base de datos, se optó por utilizar el ORM Sequelize, ya que simplifica el desarrollo y la gestión de bases de datos en aplicaciones Node.js.

Se implementó la autenticación con Passport.js y JWT para manejar la sesión y la autenticación por roles. También se realizó el hashing de la contraseña para guardarla en la base de datos de manera segura.

Se protegieron las rutas teniendo en cuenta los roles que tenga el usuario en su token, y se validaron los tokens que cambiaran su clave.

## Pruebas End-to-End (E2E)

Se han incluido pruebas E2E en este proyecto ya que esto nos ayuda a garantizar su correcto funcionamiento.