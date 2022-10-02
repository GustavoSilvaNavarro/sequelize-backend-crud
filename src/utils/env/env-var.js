'use strict';

export default {
  dbName: process.env.POSTGRES_DB_SQL_DBNAME,
  dbUser: process.env.POSTGRES_DB_SQL_USER,
  dbPass: process.env.POSTGRES_DB_SQL_PASSWORD,
  dbHost: process.env.POSTGRES_DB_SQL_HOST,
};
