export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};
export declare class TodoApp {
    private todos;
    private nextId;
    addTodo(title: string): void;
    removeTodo(id: number): void;
    toggleTodo(id: number): void;
    listTodos(): void;
}
//# sourceMappingURL=todo.d.ts.map