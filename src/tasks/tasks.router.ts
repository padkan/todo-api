import { Request, Response, Router } from 'express';
import { TasksController } from './tasks.controller';

// run router function to createn new router

export const taskRouter: Router = Router();

taskRouter.get('/tasks', (req: Request, res: Response) => {
  const taskController = new TasksController();
  taskController.getAll();
  res.send('Express + Typescript server');
});
