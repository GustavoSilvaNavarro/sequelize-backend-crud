'use strict';
import 'dotenv/config';

import connectionToServer from './server/server.js';
import { sequelize } from './db/connection-db.js';
// import './models/project-model.js';
// import './models/task-model.js';

const { app } = connectionToServer;

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully');

    app.listen(app.get('port'), () => {
      console.log(`Server on Port: ${app.get('port')} - Worker: ${process.pid}`);
    });
  } catch (err) {
    console.log('Unable to connect to the database: ', err);
  }
}

main();
