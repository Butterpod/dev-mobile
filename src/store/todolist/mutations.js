export function removeTodo(state, todo) {
    let todoIndex = state.todos.indexOf(todo);
    state.todos.splice(todoIndex, 1);
}

export function addTodo(state) {
    state.todos.push({
        id: state.todos.length + 1,
        name: state.newTodo,
        completed: false,
    });
    state.newTodo = '';
}

export function setFilter(state, filtre) {
    state.filter = filtre;
}

export function setNewTodo(state, e) {
    state.newTodo = e.target.value;
}