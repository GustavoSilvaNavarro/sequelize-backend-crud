import { ProjectSchema } from '../models/project-model.js';
import { TaskSchema } from '../models/task-model.js';

//! GET - show info about projects
export const getProjects = async (req, res, next) => {
  try {
    const allProjects = await ProjectSchema.findAll();

    res.status(200).json(allProjects);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! POST - Save info about a project
export const sendInfoProject = async (req, res, next) => {
  try {
    const newProject = await ProjectSchema.create(req.body);

    res.status(200).json(newProject);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

export const getSingleData = async (req, res, next) => {
  try {
    const project = await ProjectSchema.findOne({
      where: {
        id: req.params.idProject,
      },
    });

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).send('Product does not exist');
    }
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! PUT - Update info of a project
export const updateInfo = async (req, res, next) => {
  try {
    const { name, priority, description } = req.body;

    const singleProject = await ProjectSchema.findByPk(req.params.idProject);
    singleProject.name = name;
    singleProject.priority = priority;
    singleProject.description = description;

    singleProject.save();
    res.status(200).json(singleProject);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! Delete - data from a project
export const deleteInfo = async (req, res, next) => {
  try {
    await ProjectSchema.destroy({
      where: {
        id: req.params.idProject,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};

//! Get - Show all tasks that belong to a project
export const getAllTasksFromProject = async (req, res, next) => {
  try {
    const tasks = await TaskSchema.findAll({
      where: {
        projectId: req.params.idProject,
      },
    });

    res.status(200).json(tasks);
  } catch (err) {
    console.log(err.message || err.toString());
    next(err);
  }
};
