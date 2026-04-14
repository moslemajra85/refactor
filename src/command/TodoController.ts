import type { Command, UndoableCommand } from "./types.js";
import { CommandHistory } from "./History.js";
import { TodoList } from "./TodoList.js";


export class TodoController {
  constructor(private history: CommandHistory) {}

  run(command: Command) {
    command.execute();

    if ("undo" in command) {
      this.history.push(command as UndoableCommand);
    }
  }


  undo() {
    const command = this.history.pop();
    if (command) command.undo();
  }
}

 