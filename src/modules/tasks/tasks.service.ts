import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './interfaces/task.interface';
import { v1 as uuidv1 } from 'uuid';

@Injectable()
export class TasksService {

  private tasks: Task[]= [];

  // Create a new tasks
  createTask(title: string, description: string): Task {
    const task : Task = {
      id: uuidv1(),
      title,
      description,
      status: TaskStatus.OPEN
    };
    this.tasks.push(task);
    return task;
  }

  // Get all tasks
  getAllTasks(): Task[]
  {
    return this.tasks;
  }

  // Get task by ID
  getTaskByID(id)
  {
    return `get a task by ID = ${id}`;
  }

  // Update task by ID
  updateTaskById(id)
  {
    return `update is a task by ID = ${id}`;
  }

  // Delete Task by ID
  deleteTaskById(id)
  {
    return `delete is a task by ID = ${id}`;
  }
}
