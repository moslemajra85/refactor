import { TodoController } from "./TodoController.js";
import { CommandHistory } from "./History.js";
import { TodoList } from "./TodoList.js";
import {
  AddTodoCommand,
  RemoveTodoCommand,
  ToggleTodoCommand,
} from "./types.js";

const todoList = new TodoList();
const history = new CommandHistory();
const controller = new TodoController(history);

controller.run(new AddTodoCommand(todoList, "Learn C++"));
controller.run(new AddTodoCommand(todoList, "Learn Java"));
controller.run(new AddTodoCommand(todoList, "Learn Rust"));
todoList.showList();
controller.run(new RemoveTodoCommand(todoList, 2));
todoList.showList();

controller.undo();

todoList.showList();
