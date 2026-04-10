import type { TodoApp } from "../basic/todo.js";

export interface Command {
  execute(): void;
}

export class AddTodoCommand implements Command {
  constructor(private todoApp: TodoApp) {}

  execute(): void {}
}

export class RemoveTodoCommand implements Command {
  execute() {}
}

export class ToggleTodoCommand implements Command {
  execute() {}
}
