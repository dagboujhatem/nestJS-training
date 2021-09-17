import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body('title') title: string,@Body('description') description: string): Task {
    return this.tasksService.createTask(title, description);
  }

  @Get()
  findAll(/*@Query() query: ListAllEntities*/): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.getTaskByID(id);
  }

  @Put(':id')
  update(@Param('id') id: string, /* @Body() updateCatDto: UpdateCatDto*/) {
    return this.tasksService.updateTaskById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.deleteTaskById(id);
  }
}
