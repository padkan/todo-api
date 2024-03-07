import { Router } from 'express';
import { tasksController } from './tasks.controller';
import { createValidator, updateValidator } from './tasks.validator';

// run router function to createn new router

export const taskRouter: Router = Router();

taskRouter.get('/tasks', tasksController.getAll);

taskRouter.post('/tasks', createValidator, tasksController.create);

taskRouter.put('/tasks', updateValidator, tasksController.update);
