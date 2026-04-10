import { TodoApp } from "./todo.js";

const app = new TodoApp();

app.addTodo("Learn Typescript");
app.addTodo("Play BasketBall");

app.toggleTodo(1)
app.listTodos();
