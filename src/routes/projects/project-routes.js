import { Router } from 'express';

import {
  getProjects,
  sendInfoProject,
  updateInfo,
  deleteInfo,
  getSingleData,
  getAllTasksFromProject,
} from '../../controllers/project-controllers.js';

const router = Router();

//! GET - show info about projects
router.get('/projects', getProjects);

//! POST - Save info about a project
router.post('/projects', sendInfoProject);

//! Get info from a single project
router.get('/projects/:idProject', getSingleData);

//! PUT - Update info of a project
router.put('/projects/:idProject', updateInfo);

//! Delete - data from a project
router.delete('/projects/:idProject', deleteInfo);

//! Get - Show all tasks that belong to a project
router.get('/projects/:idProject/tasks', getAllTasksFromProject);

export default router;
