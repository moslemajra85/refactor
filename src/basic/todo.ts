export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export class TodoApp {
  private todos: Todo[] = [];
  private nextId = 1;

  addTodo(title: string): void {
    const todo = {
      id: this.nextId++,
      title,
      completed: false,
    };

    this.todos.push(todo);

    console.log(`Added: "${title}"`);
  }

  removeTodo(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      console.log(`Todo with id: ${id} was not found.`);
      return;
    }

    const removed = this.todos.splice(index, 1)[0];
    console.log(`Removed: ${removed!.title}`);
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      console.log(`Todo with id: ${id} was not found.`);

      return;
    }

    todo.completed = !todo.completed;

    console.log(`Toggle Todo with id : ${id}`);
  }

  listTodos(): void {
    console.log("\nTodo List");
    if (this.todos.length === 0) {
      console.log("No Todos Yet");

      return;
    }

    for (let todo of this.todos) {
      const status = todo.completed ? "[x]" : "[]";

      console.log(`${status} ${todo.id}.  ${todo.title}`);
    }
  }
}

 