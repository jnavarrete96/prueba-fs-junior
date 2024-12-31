import { Sequelize } from 'sequelize';
import dbConfig from '../config/config.js';

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión con la base de datos exitosa');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

export { sequelize };
