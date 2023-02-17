import { TodoService } from './todo.service';
import { Body, Param, Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { TodoModel } from './todo.model';
import { TodoDTO, TodoDTOUpdate } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}


  @Get()
  getTodos(): TodoModel[] {
    return this.todoService.getTodos();
  }

  @Get(':id')
  
  getTodoById(@Param('id') id: string) : TodoModel {
    return this.todoService.getTodoById(id);
  }

  @Post()
  create(@Body() todo:TodoDTO): TodoModel {
    return this.todoService.create(todo);
  }


  @Delete(':id')
  deleteTodoById(@Param('id') id: string) : TodoModel {
    return this.todoService.deleteTodoById(id);
  }

  @Patch(':id')
  updateTodoById(@Param('id') id: string, @Body() todo:TodoDTOUpdate) : TodoModel {
    return this.todoService.updateTodoById(id, todo);

  }


}
