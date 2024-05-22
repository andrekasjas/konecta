# Frontend Konecta

Se requiere tener instalado Node.js y npm.

## Configuración

Para iniciar el proyecto, debe configurar en el archivo `.env` la ruta a la API a la que se le harán las peticiones. Encontrará el archivo `.env.example` como referencia; debe crear el archivo `.env` y establecer la siguiente variable:
```yaml
VITE_API_ROUTE=http://localhost:3000/api/v1
```

## Instalación

Una vez configurado, proceda a ejecutar el siguiente comando para instalar todas las librerías y dependencias necesarias para el correcto funcionamiento de la aplicación:

```bash
npm install
```

## Mejores prácticas y seguridad

### Componentes

Esta aplicación se realizó con componentes, lo cual nos otorga varias ventajas:

- **Reutilización de código**
- **Modularidad**
- **Separación de preocupaciones**
- **Rendimiento optimizado**
- **Desarrollo rápido**

### Hooks

Se crearon hooks para mejorar la separación de preocupaciones y la reutilización de lógica. Los principales hooks son:

- **Hook de autenticación**: Se encarga de iniciar sesión, terminarla, validar roles y extraer claims del token.
- **Hook de formulario**: Para manejar todos los formularios de la aplicación.
- **Hook de popup**: Se encarga de manejar los eventos de apertura y cierre de modales.

### Componente ErrorBoundary

Se creó el componente `ErrorBoundary`, el cual mejora el manejo de errores permitiendo capturarlos y evitar que estos rompan la aplicación, proporcionando una mejor experiencia al usuario. (En la página de inicio de la aplicación, al hacer scroll, se puede ver un ejemplo de un componente roto capturado por el `ErrorBoundary`).

### Componente Interceptor

Se creó el componente `Interceptor`, el cual permite la centralización del manejo de solicitudes y respuestas. Un ejemplo de uso es que cada petición muestre un indicador de carga y procese el resultado de su respuesta. Además, agrega el token de usuario a los headers en cada petición.

### Paginado

Se agregó paginado a las consultas `getAll`, como son las listas de empleados, solicitudes y usuarios.

### Autenticación por JWT

La aplicación cuenta con un sistema de autenticación por JWT, con roles enviados en los claims del JWT, los cuales son validados tanto en el frontend como en el backend.

### Gestión de estados globales

Se utilizó `reduxjs/toolkit` para la gestión de estados globales, ya que permite una mejor integración y estructura, así como una gestión eficaz de la lógica asíncrona.

### Manejo de rutas

Se manejaron las rutas con `react-router-dom`.

### Carga diferida

Se implementó la carga diferida de componentes de la aplicación y rutas con `lazy` y `Suspense`, favoreciendo una distribución de carga más eficiente, mejorando la experiencia del usuario, el rendimiento inicial y la optimización del uso de recursos.
