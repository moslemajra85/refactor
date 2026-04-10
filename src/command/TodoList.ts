type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

class TodoList {
  private todos: Todo[] = [];
  private nextId = 1;

  add(title: string): Todo {
    const todo = {
      id: this.nextId++,
      title,
      completed: false,
    };

    this.todos.push(todo);
    console.log(`Added: "${title}"`);
    return todo;
  }

  remove(id: number): Todo | null {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return null;
    }

    const removed = this.todos.splice(index, 1)[0]!;

    return removed;
  }

  toggleTodo(id: number): Todo | null {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      console.log(`Todo with id: ${id} was not found.`);
      return null;
    }

    todo.completed = !todo.completed;

    return todo;
  }

  findIndexById(id: number): number {
    return this.todos.findIndex((todo) => todo.id === id);
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  insertAt(todo: Todo, index: number): void {
    this.todos.splice(index, 0, todo);
    console.log(`Todo Inserted At location ${index}: ${todo.title}`);
  }
}
