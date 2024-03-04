import { Request, Response, Router } from 'express';
import { TasksController } from './tasks.controller';

// run router function to createn new router

export const taskRouter: Router = Router();

taskRouter.get('/tasks', async (req: Request, res: Response) => {
  const taskController = new TasksController();
  const allTasks = await taskController.getAll();
  res.json(allTasks).status(200);
});
