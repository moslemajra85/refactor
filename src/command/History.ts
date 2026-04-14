import type { UndoableCommand } from "./types.js";

export class CommandHistory {
  private history: UndoableCommand[] = [];

  push(c: UndoableCommand) {
    this.history.push(c);
  }

  pop() {
    return this.history.pop();
  }
}
