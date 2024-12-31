import { Sequelize } from 'sequelize';
import config from '../config/config.js';

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect,
});

try {
  await sequelize.authenticate();
  console.log('Conexión establecida con éxito.');
} catch (error) {
  console.error('No se pudo conectar a la base de datos:', error);
}

export { sequelize };
