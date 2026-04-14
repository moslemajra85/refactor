import type { Todo, TodoList } from "./TodoList.js";

export interface Command {
  execute(): void;
}

export interface UndoableCommand extends Command {
  undo(): void;
}


export class AddTodoCommand implements UndoableCommand {
  private id: number | null = null;

  constructor(private list: TodoList, private title: string) {}

  execute() {
    const todo = this.list.add(this.title);
    this.id = todo.id;
  }

  undo() {
    if (this.id !== null) this.list.remove(this.id);
  }
}

export class RemoveTodoCommand implements UndoableCommand {
  private removed: Todo | null = null;
  private index = -1;

  constructor(private list: TodoList, private id: number) {}

  execute() {
    this.index = this.list.findIndexById(this.id);
    this.removed = this.list.remove(this.id);
  }

  undo() {
    if (this.removed && this.index !== -1) {
      this.list.insertAt(this.removed, this.index);
    }
  }
}

export class ToggleTodoCommand implements UndoableCommand {
  constructor(private list: TodoList, private id: number) {}

  execute() {
    this.list.toggle(this.id);
  }

  undo() {
    this.list.toggle(this.id);
  }
}


