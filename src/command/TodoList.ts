export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Receiver
export class TodoList {
  private todos: Todo[] = [];
  private nextId = 1;

  add(title: string): Todo {
    const todo = { id: this.nextId++, title, completed: false };
    this.todos.push(todo);
    return todo;
  }

  remove(id: number): Todo | null {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return null;
    return this.todos.splice(index, 1)[0]!;
  }

  toggle(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  insertAt(todo: Todo, index: number) {
    this.todos.splice(index, 0, todo);
  }

  findIndexById(id: number) {
    return this.todos.findIndex((t) => t.id === id);
  }

  showList() {
    console.log(this.todos);
  }
}
