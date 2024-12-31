# Interfaz de Gestión de Películas

Este proyecto es una interfaz de usuario basada en React para gestionar películas, que permite a los usuarios crear nuevos registros de películas y visualizar una lista de las existentes.

## Dependencias

### Dependencias principales:

- **react**: Biblioteca de JavaScript para construir interfaces de usuario.
- **react-dom**: Paquete de React para renderizado en el DOM.
- **react-router**: Biblioteca para manejar rutas en aplicaciones React.
- **react-router-dom**: Extensión de React Router para aplicaciones basadas en el DOM.
- **prop-types**: Verificación de tipos en tiempo de ejecución para las props de React.

### Dependencias de desarrollo:

- **eslint**: Herramienta para identificar y reportar patrones en JavaScript.
- **prettier**: Formateador de código con opiniones definidas.
- **tailwindcss**: Framework CSS basado en utilidades.
- **vite**: Herramienta de construcción rápida para proyectos web modernos.

---

## Registros de prueba para la base de datos

Para insertar registros de prueba en la tabla `movies_tb` de la base de datos `movies_db`, usa la siguiente consulta SQL:

```sql
INSERT INTO movies_db.movies_tb (title, `year`, genre, synopsis, `cast`, image)
VALUES
('Inception', '2010', 'Sci-Fi', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.', '[\"Leonardo DiCaprio\", \"Joseph Gordon-Levitt\", \"Elliot Page\"]', 'https://m.media-amazon.com/images/S/pv-target-images/ccc13395d64a017b582bb85ad82b36e45166507fb5efbf30de2a74a6cbc32dc0.jpg'),
('Pirates of the Caribbean: The Curse of the Black Pearl', '2003', 'Family', 'The plot follows the pirate Jack Sparrow and the blacksmith Will Turner, as they attempt to rescue the kidnapped Elizabeth Swann.', '[\"Johnny Depp\", \"Geoffrey Rush\", \"Orlando Bloom\", \" Keira Knightley\"]', 'https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png'),
('Requiem for a Dream', '2000', 'psychological drama', 'The film depicts four characters affected by drug addiction and how it alters their physical and emotional states. Their addictions cause them to become imprisoned in a world of delusion and desperation.', '[\"Ellen Burstyn\", \"Jared Leto\", \"Jennifer Connelly\", \"Marlon Wayans\"]', 'https://upload.wikimedia.org/wikipedia/en/9/92/Requiem_for_a_dream.jpg');
```

---

## Comportamiento del formulario del frontend

En el formulario de creación de películas, el campo cast permite ingresar los nombres de los actores separados por comas sin espacios entre ellos. Por ejemplo:

`Juan Pablo,Pedro Perez,Camila León`

La entrada será procesada correctamente al enviar el formulario, sin necesidad de añadir espacios después de las comas.

---

## Licencia

Este proyecto está bajo la licencia ISC.
