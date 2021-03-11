import state from "@/store/todolist/state";
export function removeTodo(todo) {
    let todoIndex = state.todos.indexOf(todo);
    // this.todos = this.todos.slice(todoIndex);
    // splice est mieux.
    state.todos.splice(todoIndex, 1);
}
export function addTodo() {
    this.todos.push({
        id : this.todos.length + 1,
        name : this.newTodo,
        completed : false,
    });
    this.newTodo = '';
}