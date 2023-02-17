import { TodoService } from './todo.service';
import { TodoModel } from './todo.model';
import { TodoDTO, TodoDTOUpdate } from './todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTodos(): TodoModel[];
    getTodoById(id: string): TodoModel;
    create(todo: TodoDTO): TodoModel;
    deleteTodoById(id: string): TodoModel;
    updateTodoById(id: string, todo: TodoDTOUpdate): TodoModel;
}
