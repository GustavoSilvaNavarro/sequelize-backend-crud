import { Router } from 'express';

import {
  getProjects,
  sendInfoProject,
  updateInfo,
  deleteInfo,
  getSingleData,
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

export default router;
