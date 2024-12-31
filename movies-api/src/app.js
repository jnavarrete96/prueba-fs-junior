import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import Movie from './models/movie.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB()
  .then(() => {
    return Movie.sync({ force: false });
  })
  .then(() => {
    console.log('Tabla Movie sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar con la base de datos o crear la tabla:', err);
  })
