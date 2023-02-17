import { BadRequestException, Body, Param, Injectable, Get, Post, Delete, Patch, NotFoundException, Inject } from '@nestjs/common';
import { ITs } from '../constants';
import { TodoDTO, TodoDTOUpdate } from './todo.dto';
import { TodoModel, TodoStatusEnum } from './todo.model';

@Injectable()
export class TodoService {
  @Inject(ITs.uuid) uuid: () => string;
  
  private todos: TodoModel[] = [];

  @Get()
  getTodos(): TodoModel[] {
    return this.todos;
  }

  @Get(':id')
  
  getTodoById(@Param('id') id: string) : TodoModel {
    const todo = this.todos.find(todo => todo.id.toString() === id);
    if(todo == null) 
      throw new NotFoundException('Todo not found');
    return this.todos.find(todo => todo.id.toString() === id);
  }

  @Post()
  create(@Body() todo:TodoDTO): TodoModel {
    let newTodo:TodoModel = new TodoModel();
    if(todo.title == null || todo.description == null) {
      throw new BadRequestException('title and description are required');
    }

    newTodo.id = this.uuid();
    newTodo.title = todo.title;
    newTodo.description = todo.description;
    newTodo.status = TodoStatusEnum.waiting;
    newTodo.createdAt = new Date();
    this.todos.push(newTodo);

    return newTodo;
  }


  @Delete(':id')
  deleteTodoById(@Param('id') id: string) : TodoModel {
    const todo = this.todos.find(todo => todo.id.toString() === id);
    if(todo == null) 
      throw new NotFoundException('Todo not found');
    this.todos = this.todos.filter(todo => todo.id.toString() !== id);
    return todo;
  }

  @Patch(':id')
  updateTodoById(@Param('id') id: string, @Body() todo:TodoDTOUpdate) : TodoModel {
    const todoToUpdate = this.todos.find(todo => todo.id.toString() === id);
    if(todoToUpdate == null) 
      throw new NotFoundException('Todo not found');
      
    if( todo.status && !(todo.status in TodoStatusEnum) ) 
      throw new BadRequestException('status is not valid, must be one of: waiting, actif, done');
    
    todoToUpdate.status = todo.status || todoToUpdate.status;
    todoToUpdate.title = todo.title || todoToUpdate.title;
    todoToUpdate.description = todo.description || todoToUpdate.description;
    return todoToUpdate;
  }
}
