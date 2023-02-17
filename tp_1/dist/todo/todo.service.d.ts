import { TodoDTO, TodoDTOUpdate } from './todo.dto';
import { TodoModel } from './todo.model';
export declare class TodoService {
    uuid: () => string;
    private todos;
    getTodos(): TodoModel[];
    getTodoById(id: string): TodoModel;
    create(todo: TodoDTO): TodoModel;
    deleteTodoById(id: string): TodoModel;
    updateTodoById(id: string, todo: TodoDTOUpdate): TodoModel;
}
