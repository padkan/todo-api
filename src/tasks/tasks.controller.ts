import { AppDataSource } from '../../index';
import { Task } from './tasks.entity';
import { instanceToPlain } from 'class-transformer';
export class TasksController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}

  // @ts-expect-error handled latter
  public async getAll(): Promise<Task[]> {
    let allTasks: Task[];
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch (error) {
      console.log(error);
    }
  }
}
