import { Sequelize } from 'sequelize';

import env from '../utils/env/env-var.js';

export const sequelize = new Sequelize(env.dbName, env.dbUser, env.dbPass, {
  host: env.dbHost,
  dialect: 'postgres',
});
