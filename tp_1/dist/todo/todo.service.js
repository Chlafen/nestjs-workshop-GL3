"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const todo_model_1 = require("./todo.model");
let TodoService = class TodoService {
    constructor() {
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    getTodoById(id) {
        const todo = this.todos.find(todo => todo.id.toString() === id);
        if (todo == null)
            throw new common_1.NotFoundException('Todo not found');
        return this.todos.find(todo => todo.id.toString() === id);
    }
    create(todo) {
        let newTodo = new todo_model_1.TodoModel();
        if (todo.title == null || todo.description == null) {
            throw new common_1.BadRequestException('title and description are required');
        }
        newTodo.id = this.uuid();
        newTodo.title = todo.title;
        newTodo.description = todo.description;
        newTodo.status = todo_model_1.TodoStatusEnum.waiting;
        newTodo.createdAt = new Date();
        this.todos.push(newTodo);
        return newTodo;
    }
    deleteTodoById(id) {
        const todo = this.todos.find(todo => todo.id.toString() === id);
        if (todo == null)
            throw new common_1.NotFoundException('Todo not found');
        this.todos = this.todos.filter(todo => todo.id.toString() !== id);
        return todo;
    }
    updateTodoById(id, todo) {
        const todoToUpdate = this.todos.find(todo => todo.id.toString() === id);
        if (todoToUpdate == null)
            throw new common_1.NotFoundException('Todo not found');
        if (todo.status && !(todo.status in todo_model_1.TodoStatusEnum))
            throw new common_1.BadRequestException('status is not valid, must be one of: waiting, actif, done');
        todoToUpdate.status = todo.status || todoToUpdate.status;
        todoToUpdate.title = todo.title || todoToUpdate.title;
        todoToUpdate.description = todo.description || todoToUpdate.description;
        return todoToUpdate;
    }
};
__decorate([
    (0, common_1.Inject)(constants_1.ITs.uuid),
    __metadata("design:type", Function)
], TodoService.prototype, "uuid", void 0);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TodoService.prototype, "getTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoService.prototype, "getTodoById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoService.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoService.prototype, "deleteTodoById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", todo_model_1.TodoModel)
], TodoService.prototype, "updateTodoById", null);
TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map