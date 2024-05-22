# Proyecto Konecta

Este proyecto incluye el backend y frontend de la prueba de Konecta. Dentro de las carpetas `konecta_front` y `konecta_back` encontrará un README con los pasos necesarios para la instalación y ejecución de la aplicación, además de una breve descripción de las decisiones y herramientas utilizadas.

## Levantar la aplicación completa con Docker

Para levantar la aplicación completa usando Docker, siga estos pasos:

1. En el archivo `docker-compose.yml`, establezca las variables de entorno necesarias en el servicio *backend*:

    ```yaml
    environment:
      DB_USER: andrekasjas    # Usuario de la base de datos
      DB_PASSWORD: admin      # Contraseña de ese usuario
      DB_HOST: localhost      # Host de la base de datos
      DB_NAME: konecta        # Nombre de la base de datos
      DB_PORT: 5432           # Puerto de la base de datos
      JWT_SECRET: konecta     # Firma de los JWT
    ```

2. En el servicio *frontend*, establezca la ruta de la API:

    ```yaml
    environment:
      VITE_API_ROUTE: http://localhost:5000/api/v1  # Ruta de la API
    ```

3. Ejecute el siguiente comando para construir y levantar los servicios de Docker:

    ```bash
    docker-compose up --build
    ```

Con estos pasos, su aplicación debería estar lista y corriendo en los contenedores Docker.

Para obtener más detalles sobre la configuración y ejecución de la aplicación, consulte los archivos README dentro de las carpetas `konecta_front` y `konecta_back`.
