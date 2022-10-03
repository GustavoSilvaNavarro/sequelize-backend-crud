'use strict';
import express from 'express';
import morgan from 'morgan';

import projectRoutes from '../routes/projects/project-routes.js';
import tasksRoutes from '../routes/tasks/tasks-routes.js';

const app = express();

app.set('port', process.env.PORT || 8080);

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', projectRoutes);
app.use('/', tasksRoutes);

export default { app };
