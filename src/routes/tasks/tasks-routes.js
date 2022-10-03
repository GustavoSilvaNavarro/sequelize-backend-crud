import { Router } from 'express';

import {
  getTasks,
  sendInfoTask,
  getSingleTask,
  updateInfoTask,
  deleteInfoTask,
} from '../../controllers/tasks-controllers.js';

const router = Router();

//! GET - show info about tasks
router.get('/tasks', getTasks);

//! POST - Save info about a tasks
router.post('/tasks', sendInfoTask);

//! Get info from a single task
router.get('/tasks/:idTask', getSingleTask);

//! PUT - Update info of a task
router.put('/tasks/:idTask', updateInfoTask);

//! Delete - data from a task
router.delete('/tasks/:idTask', deleteInfoTask);

export default router;
