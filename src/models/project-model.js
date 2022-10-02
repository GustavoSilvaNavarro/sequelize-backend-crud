import { DataTypes } from 'sequelize';

import { sequelize } from '../db/connection-db.js';
import { TaskSchema } from './task-model.js';

export const ProjectSchema = sequelize.define('projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});

//! Creating relations for the tasks
ProjectSchema.hasMany(TaskSchema, {
  foreignKey: 'projectId',
  sourceKey: 'id',
});

TaskSchema.belongsTo(ProjectSchema, {
  foreignKey: 'projectId',
  targetKey: 'id',
});
