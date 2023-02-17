import { TodoStatusEnum } from "./todo.model";
export interface TodoDTO {
    title: string;
    description: string;
}
export interface TodoDTOUpdate {
    title: string;
    description: string;
    status: TodoStatusEnum;
}
