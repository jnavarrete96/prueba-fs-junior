# Movies API

Una API para gestionar películas utilizando Node.js, Express, Sequelize y MySQL.

## Requisitos

- Node.js v21.7.3 o superior
- npm 10.5.0 o superior
- MySQL

## Instalación

1. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

2. Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

   ```plaintext
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=nombre_de_la_base_de_datos
   ```

   Asegúrate de cambiar los valores según tu configuración de MySQL.

---

## Uso

Para iniciar el servidor en modo de desarrollo, ejecuta el siguiente comando:

```bash
   npm run dev
```

Esto iniciará el servidor usando nodemon para que se reinicie automáticamente en caso de cambios en el código.

---

## Rutas

### `GET /api/Movies`

Obtiene el listado de todas las películas.

### Respuesta

- `200 OK`: Devuelve un array con las películas.

### `GET /api/movies/:id`

Obtiene el detalle de una película por su ID.

### Respuesta

- `200 OK`: Devuelve la película.
- `404 Not Found`: Si no se encuentra una película con el ID proporcionado.

### `POST /api/movies`

Crea una nueva película, los campos title, year, genre y image son obligatorios.

### Cuerpo de la solicitud

```json
{
  "title": "Título de la película",
  "year": 2022,
  "genre": "Género",
  "synopsis": "Sinopsis de la película",
  "cast": ["Actor 1", "Actor 2"],
  "image": "URL de la imagen"
}
```

### Respuesta

- `201 CREATED`: Crea la película.
- `400 Bad Request`: Si algún campo obligatorio es nulo.

---

## Formateo del código

Para formatear el código con Prettier, ejecuta el siguiente comando:

```bash
   npm run format
```

---

## Licencia

Este proyecto está bajo la licencia ISC.
