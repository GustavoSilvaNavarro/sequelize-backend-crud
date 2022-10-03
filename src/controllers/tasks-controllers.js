import { TaskSchema } from '../models/task-model.js';

//! GET - show info about tasks
export const getTasks = async (req, res, next) => {
  try {
    const allTasks = await TaskSchema.findAll();
    res.status(200).json(allTasks);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! POST - Save info about a tasks
export const sendInfoTask = async (req, res, next) => {
  try {
    const newTask = await TaskSchema.create(req.body);
    res.status(200).json(newTask);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! Get info from a single task
export const getSingleTask = async (req, res, next) => {
  try {
    const singleTask = await TaskSchema.findOne({
      where: {
        id: req.params.idTask,
      },
      attributes: ['name', 'done', 'projectId'],
    });

    res.status(200).json(singleTask);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! PUT - Update info of a task
export const updateInfoTask = async (req, res, next) => {
  try {
    const taskUpdated = await TaskSchema.findOne({
      where: {
        id: req.params.idTask,
      },
    });

    taskUpdated.set(req.body);
    await taskUpdated.save();

    res.status(200).json(taskUpdated);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! Delete - data from a task
export const deleteInfoTask = async (req, res, next) => {
  try {
    const taskDeleted = await TaskSchema.destroy({
      where: {
        id: req.params.idTask,
      },
    });

    console.log(taskDeleted);

    res.status(204).send('Deleted');
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};
